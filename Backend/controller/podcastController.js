const Song = require("../models/songModel");
const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.createPodcast = catchAsyncErrors(async (req, res, next) => {
  const podcast = await Podcast.create(req.body);
  res.status(201).json({
    success: true,
    podcast,
  });
});
