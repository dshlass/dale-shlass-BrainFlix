const express = require('express')
const router = express.Router()

//Video array
const mainVideo = require("../data/videos.json");

//Middleware to verify if an API key exists
const verifyApi = require('../middleware/verifyApi');
router.use(verifyApi)

router.use("/:id",  (req, res,next) => {
  let matchingVideo = mainVideo.find(video => { return video.id === req.params.id })
  if (matchingVideo) {
    res.status(200).json(matchingVideo)
  } else {
    res.status(404).json({
      message: "No video with that id exists"
    })
  }
});

router.use("/", (req, res, next) => {
  res.status(200).json(mainVideo);
});


module.exports = router
