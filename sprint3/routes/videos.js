const express = require('express')
const router = express.Router()
const uuid = require('uuid/v1')

//Video array
const mainVideo = require("../data/videos.json");

//Middleware to verify if an API key exists
const verifyApi = require('../middleware/verifyApi');
router.use(verifyApi)

/**
 * splices the array at the location and adds a comma to the array
 * creates a string of the array by joining at the separating comma
 */
function addComma(location, stringToArray) {
  stringToArray.splice(location,0,',')
  return arrayToString = stringToArray.join('');
}


//deleted the matching comment with the comment id requested
router.delete("/:id/comments/:commentid", (req, res, next) => {

  let matchingVideo = mainVideo.find(video => {
    return video.id === req.params.id;
  });

  let matchingComment = matchingVideo.comments.find(comment => {
    return comment.id === req.params.commentid
  })

  //gets the index of the comment within the comment array with the matching comment id
  let pos = matchingVideo.comments
            .map(comments => comments.id)
            .indexOf(req.params.commentid);

  matchingVideo.comments.splice(pos, 1);

  res.status(200).json(matchingComment);

});

//This puts a like for the comment corresponding to the comment id
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

/**
 * This puts a like for the video corresponding to the video id
 * The likes are stored as strings, so to add +1 to the like you need an integer
 * then to put the comma back into the integer, i worked with arrays. 
 * 
 * More on the logic is commented below:
 */
router.put("/:id/like", (req, res, next) => {
  if (req.headers["content-type"] &&req.headers["content-type"] === "application/json") {
    
    let matchingVideo = mainVideo.find(video => {
      return video.id === req.params.id;
    });
    
    let videoLikes = matchingVideo.likes

    newVal = parseInt(videoLikes.split(",").join("")) + 1;

    intToString = JSON.stringify(newVal)

    let stringToArray = intToString.split('')
    
    let length = intToString.length

    let posOfComma = length % 3

  /**
   * This means that the length of the number of likes is multiples of 3
   * this loops throught the array of numbers and puts a comma after every third number 
   * the second if statement ensures that when the value gets to 100, the value is returned
   */
    if (posOfComma === 0) {
      for (let i=0; i<length; i++) {
        if (i%3 === 0 && i!==0) {
        matchingVideo.likes = addComma(i, stringToArray) 
        }
        if (i===0) {
          matchingVideo.likes = intToString 
        }
      }
    }
    //This is for numbers with greater length than 3 that arent multiples of 3
    else if (posOfComma  != 0 && posOfComma >2) {
      matchingVideo.likes = addComma(posOfComma, stringToArray)
    }
    //This is for numbers with greater length than 3 that have a remainder of 2
    else if ( posOfComma  === 2 && length > 3) {
      matchingVideo.likes = addComma(posOfComma, stringToArray) 
    }
    //This is for numbers with  length less than 3 that have a remainder of 2
    else if ( posOfComma  === 2 ) {
      matchingVideo.likes = intToString  
    }
    //This is for numbers with greater length than 3 that have a remainder of 1
    else if (posOfComma  === 1 && length > 3 ) {
      matchingVideo.likes = addComma(posOfComma, stringToArray)
    }
    //This is for numbers with  length less than 3 that have a remainder of 1
    else if (posOfComma  === 1 ) {
      matchingVideo.likes = intToString 
    }
    
    res.status(200).json(matchingVideo);
  }
});

/**
 * Adds a new comment to the specified video id
 * an ID is assigned to the video as well as the posting date and likes
 */

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

//returns the matching video with the id requested
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
