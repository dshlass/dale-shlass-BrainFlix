const express = require("express");
const app = express();
const videoRoutes = require('./routes/videos')

app.use(express.json());
app.use(express.urlencoded({exended:true}));

// let videoId = mainVideo.map(video => video.id);

app.use('', videoRoutes)


//Verifies if there is a api_key associated with the request
// verifyApiKey = req => {
//   if (!req.query.api_key) {
//     return "403 Not Authorized";
//   }
// };

// function randomString() {
//   let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
//   let string_length = 20;
//   let randomstring = "";
//   for (let i = 0; i < string_length; i++) {
//     let rnum = Math.floor(Math.random() * chars.length);
//     randomstring += chars.substring(rnum, rnum + 1);
//   }
//   return randomstring;
// }

// console.log(randomString());

// getMainVideo = reqId => {
//   let match = false;
//   for (let id of videoId) {
//     if (id !== reqId) {
//       continue;
//     } else match = true;
//   }
//   if (match === true) {
//     return mainVideo.filter(video => {
//       return video.id === reqId;
//     });
//   } else return "404 Video Not Found";
// };

// app.get("/videos/:id", (req, res) => {
//   let notVerified = verifyApiKey(req);
//   let returnVideo = getMainVideo(req.params.id);

//   if (notVerified) {
//     res.send("403 Not Authorized");
//   } else res.send(returnVideo);
// });

// app.get("/videos", (req, res) => {
//   let notVerified = verifyApiKey(req);
//   if (notVerified) {
//     res.send("403 Not Authorized");
//   } else res.send(sideVideo);
// });

// start Express on port 8000
app.listen(8000, () => {
  console.log("Server Started on http://localhost:8000");
  console.log("Press CTRL + C to stop server");
});
