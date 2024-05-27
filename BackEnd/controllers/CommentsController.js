const Comment = require('../sequelize').Comment
exports.getAllComments = (req, res) => {
    Comment.findAll().then(comments => {
        res.send(comments);
    });
};

exports.deleteComment = (req, res) =>{

};

exports.createComment = (req, res) =>{

};

exports.updateComment = (req, res) =>{

};