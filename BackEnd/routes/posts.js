var express = require('express');
var router = express.Router();
var postController = require('../controllers/postController');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('ind', { title: 'Express' });
});



module.exports = router;
