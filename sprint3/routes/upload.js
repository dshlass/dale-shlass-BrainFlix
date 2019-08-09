const express = require('express')
const router = express.Router()
const uuid = require('uuid/v1')
const form = require('form-data')

//Video array
const mainVideo = require("../data/videos.json");

//Middleware to verify if an API key exists
const verifyApi = require('../middleware/verifyApi');

router.use(verifyApi)


router.use("/", (req, res, next) => {
	console.log(req)
	// if (req.headers["content-type"] && req.headers["content-type"] === 'application/json') {
	// 	const data = req.body;

	// 	console.log(data)
		res.send('Hello')
	// }
});

module.exports = router



// if (data.tweet) {
//     const newTweetId = nanoid();
//     currentTweets.push({
//         tweet: data.tweet,
//         id: newTweetId
//     });
//     updateDatabase(currentTweets).then((message) => {
//         res.status(201).send({
//             success: true,
//             message: message,
//             tweetId: newTweetId
//         });
//     })
//         .catch((errorMessage) => {
//             res.status(500).send({
//                 success: false,
//                 message: errorMessage
//             });
//         });
// } else {
//     res.status(400).send({
//         success: false,
//         message: 'data malformed'
//     });
// }
//     } else {
//     res.status(400).send({
//         success: false,
//         message: 'invalid content type'
//     });
// }