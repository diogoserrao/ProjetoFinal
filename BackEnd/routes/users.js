var express = require('express');
const UsersController = require('../controllers/UsersController');
var router = express.Router();
const authenticateTokenFromHeaders = require('../auth.js');

router.use(authenticateTokenFromHeaders);

router.get('/', UsersController.getAllUsers);

module.exports = router;

