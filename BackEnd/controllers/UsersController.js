const User = require('../sequelize').User;

exports.getAllUsers = (req, res) => {
    User.findAll().then(users => {
        res.send(users);
    });
};

exports.deleteUser = (req, res) =>{

};

exports.createUser = (req, res) =>{

};

exports.updateUser = (req, res) =>{

};