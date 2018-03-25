const express = require('express');
const fire = require('../api/fire');

const router = express.Router();

// Create users
router.post('/create_user/', (req, res) => {
	const { uid, name, username } = req.body;
	fire.createUser(uid, name, username).then(() => {
		res.send('Success!');
	}).catch((err) => {
		res.send('Something went wrong... ${err}');
	});
});

// Create users
router.post('/sell/', (req, res) => {
	const { investorId, channelId, minPrice, shareCount } = req.body;
	fire.postSell(investorId, channelId, minPrice, shareCount).then(() => {
		res.send('Success!');
	}).catch((err) => {
		res.send('Something went wrong... ${err}');
	});
});

module.exports = router;
