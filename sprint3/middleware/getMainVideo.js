const mainVideo = require("../data/mainVideo.json");

let videoId = mainVideo.map(video => video.id);

const getMainVideo = (reqId,res) => {
  let match = false;
  for (let id of videoId) {
    if (id !== reqId) {
      continue;
    } else match = true;
  }

  return (match) 
        ? (res.status(200).json(mainVideo.find(video => { return video.id === reqId }))) 
        : res.status(404).send("404 Video Not Found")
};

module.exports = getMainVideo