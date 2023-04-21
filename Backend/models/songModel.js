const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const songSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Song Name"],
    maxlength: [50, "Name cannot exceed 30 characters"],
    minlength: [3, "Name should have more than 3 characters"],
  },
  user: {
    type: ObjectId,
    ref: "user",
    required: [true, "Please Enter User Id"],
  },
  desc: {
    type: String,
    allow: true,
  },
  songs: {
    type: Array,
    default: [],
  },
  img: {
    type: String,
    allow: true,
  },
});

module.exports = mongoose.model("Playlist", songSchema);
