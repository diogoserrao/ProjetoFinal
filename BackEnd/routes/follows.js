var express = require('express');
var router = express.Router();
var FollowerController = require('../controllers/FollowerController');


//router.get('/', FollowerController.getAllFollows);

router.post('/', FollowerController.followUser);

router.delete('/', FollowerController.deleteFollow);

//router.put('/:id', FollowerController.updateFollow);


module.exports = router;