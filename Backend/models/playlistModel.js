const mongoose = require("mongoose");


const songSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Song Name"],
    maxlength: [50, "Name cannot exceed 30 characters"],
    minlength: [3, "Name should have more than 3 characters"],
  },
  artist: {
    type: String,
    required: [true, "Please Enter Artist Name"],
  },
  song: {
    type: String,
    required: [true, "Please Enter Song"],
  },
  img: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Song", songSchema);
