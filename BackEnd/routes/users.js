var express = require('express');
const UsersController = require('../controllers/UsersController');
var router = express.Router();
const authenticateTokenFromHeaders = require('../auth.js');
const Users = require('../models/Users.js');
const { User } = require('../sequelize.js');

router.use(authenticateTokenFromHeaders);

router.get('/', UsersController.getAllUsers);

router.post('/', UsersController.createUser);

router.delete('/:id', UsersController.deleteUser);

router.put('/:id', UsersController.updateUser);

module.exports = router;

