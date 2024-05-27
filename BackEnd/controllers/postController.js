const Post = require('../sequelize').Post;

exports.getAllUsers = (req, res) => {
    Post.findAll().then(posts => {
        res.send(posts);
    });
}

exports.deletePost = (req, res) =>{

};

exports.createPost = (req, res) =>{

};

exports.updatePost = (req, res) =>{

};