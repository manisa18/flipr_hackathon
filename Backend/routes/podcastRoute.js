const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const { createPodcast, getAllPodcast } = require("../controller/podcastController");

const router = express.Router();

router.route("/podcast/").get(getAllPodcast);
router.route("/podcast/new").post(createPodcast);

module.exports = router;
