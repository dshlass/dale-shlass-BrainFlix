const express = require('express')
const sideVideo = require("../data/sideVideo.json");
const apiKeyMiddleware = require('../middleware/verifyApi');
const mainVideoMiddleware = require('../middleware/getMainVideo');
const router = express.Router()

router.get("/videos", (req, res) => {
  let notVerified = apiKeyMiddleware(req);
  if (notVerified) {
    res.send("403 Not Authorized");
  } else res.send(sideVideo);
});

router.get("/videos/:id", (req, res) => {
  let notVerified = apiKeyMiddleware(req);
  let returnVideo = mainVideoMiddleware(req.params.id);

  if (notVerified) {
    res.send("403 Not Authorized");
  } else res.send(returnVideo);
});

module.exports = router
