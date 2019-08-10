const express = require('express')
const router = express.Router()

//Video array
const mainVideo = require("../data/videos.json");

//Middleware to verify if an API key exists
const verifyApi = require('../middleware/verifyApi');

router.use(verifyApi)

router.use(express.json());

router.post("/", (req, res, next) => {
	
	if (req.headers["content-type"] && req.headers["content-type"] === 'application/json') {
		const data = req.body;		

		mainVideo.push(data) 

		res.status(200).send(data)
	}
});

module.exports = router