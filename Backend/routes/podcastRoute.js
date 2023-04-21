const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const { createPodcast } = require("../controller/podcastController");

const router = express.Router();

router.route("/podcast/new").post(isAuthenticatedUser, createPodcast);

module.exports = router;
