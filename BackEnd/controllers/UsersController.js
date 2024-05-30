const User = require('../sequelize').User;

exports.getAllUsers = (req, res) => {
    User.findAll().then(users => {
        res.send(users);
    });
};

exports.deleteUser = (req, res) => {
    const userID = req.params.id;
    User.destroy({
        where: { userID: userID }
    })
    .then(deleted => {
        if (deleted) {
            res.send({ message: 'User deleted successfully' });
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    })
    .catch(error => {
        res.status(500).send({ error: 'An error occurred while deleting the user' });
    });
};
exports.createUser = (req, res) => {
    const { username, email, pass, fullname } = req.body;
    if (!username || !email || !pass || !fullname) {
        res.send({ message: 'User created successfully' });
        return
    }
    User.create({
        username: username,
        email: email,
        pass: pass,
        fullname: fullname,
        bio: bio
    })
    .then(user => {
        res.status(201).send(user);
    })
    .catch(error => {
        res.status(500).send({ error: 'An error occurred while creating the user' });
    });
};

exports.updateUser = (req, res) =>{

};