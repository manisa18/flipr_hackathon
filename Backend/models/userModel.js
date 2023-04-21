const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxlength: [30, "Name cannot exceed 30 characters"],
    minlength: [3, "Name should have more than 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minlength: [8, "Name should have more than 8 characters"],
    select: false,
  },
  gender: {
    type: String,
    required: [true, "Please Enter Your Gender"],
    validate: ["male", "female", "non-binary"],
  },
  month: {
    type: String,
    required: [true, "Please Enter Month"],
  },
  date: {
    type: String,
    required: [true, "Please Enter Date"],
  },
  year: {
    type: String,
    required: [true, "Please Enter Your Year"],
  },
  likedSongs: {
    type: [String],
    default: [],
  },
  playlist: {
    type: [String],
    default: [],
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.methods.getJWTToken = () => {
  return jwt.sign(
    { id: this._id, name: this.name, isAdmin: this.isAdmin },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
};

module.exports = mongoose.model("User", userSchema);
