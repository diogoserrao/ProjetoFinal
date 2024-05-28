var express = require('express');
const UsersController = require('../controllers/UsersController');
var router = express.Router();
const authenticateTokenFromHeaders = require('../auth.js');
const Users = require('../models/Users.js');
const { User } = require('../sequelize.js');

router.use(authenticateTokenFromHeaders);

router.get('/', UsersController.getAllUsers);

router.post('/NewUser', UsersController.createUser);

router.delete('/DeleteUser', UsersController.deleteUser);

router.put('/UpdateUser', UsersController.updateUser);

module.exports = router;

