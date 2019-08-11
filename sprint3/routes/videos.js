const express = require('express')
const router = express.Router()
const uuid = require('uuid/v1')

//Video array
const mainVideo = require("../data/videos.json");

//Middleware to verify if an API key exists
const verifyApi = require('../middleware/verifyApi');
router.use(verifyApi)

router.delete("/:id/comments/:commentid", (req, res, next) => {

  let matchingVideo = mainVideo.find(video => {
    return video.id === req.params.id;
  });

  let matchingComment = matchingVideo.comments.find(comment => {
    return comment.id === req.params.commentid
  })

  let pos = matchingVideo.comments
            .map(comments => comments.id)
            .indexOf(req.params.commentid);

  matchingVideo.comments.splice(pos, 1);

  res.status(200).json(matchingComment);

});

router.put("/:id/comments/:commentid", (req, res, next) => {

  let matchingVideo = mainVideo.find(video => {
    return video.id === req.params.id;
  });

  let matchingComment = matchingVideo.comments.find(comment => {
    return comment.id === req.params.commentid
  })

  matchingComment.likes = matchingComment.likes + 1
  res.status(200).json(matchingComment);

});


router.put("/:id/like", (req, res, next) => {
  
  if (req.headers["content-type"] &&req.headers["content-type"] === "application/json") {
    let matchingVideo = mainVideo.find(video => {
      return video.id === req.params.id;
    });
    
    let videoLikes = matchingVideo.likes

    newVal = parseInt(videoLikes.split(",").join("")) + 1;

    intToString = JSON.stringify(newVal)
    
    let length = intToString.length

    let pos = length % 3

    let stringToArray = intToString.split('')

    if (pos === 0) {
      for (let i=0; i<length; i++) {
        if (i%3 === 0 && i!==0) {
        stringToArray.splice(i,0,',')
        stringToArray.join()
        let arrayToString = stringToArray.join('');
        matchingVideo.likes = arrayToString 
        }
        if (i===0) {
          matchingVideo.likes = intToString 

        }
      }
    }
    else if (pos != 0 && pos>2) {
      stringToArray.splice(pos,0,',')
      stringToArray.join()
      let arrayToString = stringToArray.join('');
      matchingVideo.likes = arrayToString 
    }
      else if (pos === 1 || pos === 2) {
      matchingVideo.likes = intToString 
    }
    

    res.status(200).json(matchingVideo);
  }
});

router.post("/:id/comments", (req, res, next) => {
  
  if (req.headers["content-type"] && req.headers["content-type"] === "application/json") {
    
    const data = req.body;
    
    let matchingVideo = mainVideo.find(video => {
      return video.id === req.params.id;
    });

    let newId = uuid();

		let newComment= {
				...data, 
				id: newId, 
				timestamp: new Date(),
        likes: 0
		}

    matchingVideo.comments.unshift(newComment)
    
    res.status(200).send(newComment);
  }
});


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