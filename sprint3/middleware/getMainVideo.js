const mainVideo = require("../data/mainVideo.json");

let videoId = mainVideo.map(video => video.id);


getMainVideo = reqId => {
  let match = false;
  for (let id of videoId) {
    if (id !== reqId) {
      continue;
    } else match = true;
  }
  if (match === true) {
    return mainVideo.filter(video => {
      return video.id === reqId;
    });
  } else return "404 Video Not Found";
};

module.exports = getMainVideo