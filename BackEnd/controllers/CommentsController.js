const Comment = require('../sequelize').Comment
exports.getAllComments = (req, res) => {
    Comment.findAll().then(comments => {
        res.send(comments);
    });
};

exports.deleteComment = (req, res) =>{
    const commentID = req.params.id;
    Comment.destroy({
        where: { commentID: commentID }
    })
    .then(deleted => {
        if (deleted) {
            res.send({ message: 'Comment deleted successfully' });
        } else {
            res.status(404).send({ message: 'Comment not found' });
        }
    })
    .catch(error => {
        res.status(500).send({ error: 'An error occurred while deleting the comment' });
    });
};

exports.createComment = (req, res) =>{
    const { commentText, commentDate, userID, tweetID } = req.body;
    if (!commentText|| !commentDate || !userID || !tweetID) {
        res.send({ message: 'comment uploaded successfully' });
        return
    }
    Comment.create({
        commentText: commentText,
        commentDate: commentDate,
        userID: userID,
        tweetID: tweetID
    })
    .then(comment => {
        res.status(201).send(comment);
    })
    .catch(error => {
        res.status(500).send({ error: 'An error occurred while creating the comment' });
    });
};

exports.updateComment = (req, res) =>{

};