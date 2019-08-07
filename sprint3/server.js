const express = require("express");
const app = express();
const mainVideo = require("./data/mainVideo.json");
const sideVideo = require("./data/sideVideo.json");

let videoId = mainVideo.map(video => video.id);

verifyApiKey = (req, toSend) => {
  if (!req.query.api_key) {
    return "401 Unauthorized";
  } else return toSend;
};

getMainVideo = reqId => {
  for (let id of videoId) {
    if (id === reqId) {
      return mainVideo.filter(video => {
        return video.id === reqId;
      });
    }
  }
};

app.get("/videos/:id", (req, res) => {
  let returnVideo = getMainVideo(req.params.id);
  res.send(returnVideo);
});

app.get("/videos", (req, res) => {
  res.send(verifyApiKey(req, sideVideo));
});

// start Express on port 8000
app.listen(8000, () => {
  console.log("Server Started on http://localhost:8000");
  console.log("Press CTRL + C to stop server");
});
