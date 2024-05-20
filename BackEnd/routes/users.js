var express = require('express');
const usersController = require('../controllers/UsersController');
var router = express.Router();
const authenticateTokenFromHeaders = require('../auth.js');

router.use(authenticateTokenFromHeaders);

router.get('/', usersController.getAllUsers);

module.exports = router;

