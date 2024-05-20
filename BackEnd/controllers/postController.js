const Post = require('../sequelize').Post;

exports.getAllUsers = (req, res) => {
    Post.findAll().then(posts => {
        res.send(posts);
    });
}