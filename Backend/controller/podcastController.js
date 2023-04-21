const Podcast = require("../models/podcastModel");
const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

exports.createPodcast = catchAsyncErrors(async (req, res, next) => {
  const podcast = await Podcast.create(req.body);
  res.status(201).json({
    success: true,
    podcast,
  });
});

exports.getAllPodcast= catchAsyncErrors(async (req, res) => {
  const resultPerPage = 5;

  const podcastCount = await Podcast.countDocuments();
  const apiFeatures = new ApiFeatures(Podcast.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const podcasts = await apiFeatures.query;
  res.status(201).json({
    success: true,
    podcasts,
    podcastCount,
  });
});
