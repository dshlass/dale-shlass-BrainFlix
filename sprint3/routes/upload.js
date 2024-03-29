const express = require('express')
const router = express.Router()
const generate = require('nanoid/generate');
const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';

//Video array
const mainVideo = require("../data/videos.json");

//Middleware to verify if an API key exists
const verifyApi = require('../middleware/verifyApi');
router.use(verifyApi)

/**
 * Adds a new comment to the specified video id
 * an ID is assigned to the video as well as the posting date and likes
 */
router.post("/", (req, res, next) => {
	if (req.headers["content-type"] && req.headers["content-type"] === 'application/json') {
		const data = req.body;		
		
		let newId = generate(alphabet, 13);

		let newVideo= {
				...data, 
				id: newId, 
				timestamp: new Date(), 
				comments: [], 
				views: '0',
        likes: '0'
		}

		mainVideo.push(newVideo) 

		res.status(200).send(newVideo)
	}
});

module.exports = router