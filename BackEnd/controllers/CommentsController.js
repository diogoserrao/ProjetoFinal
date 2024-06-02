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
    const { commentText, imagemURL, userID, tweetID } = req.body;
    if (!commentText|| !imagemURL || !userID || !tweetID) {
        res.send({ message: 'comment uploaded successfully' });
        return
    }
    Comment.create({
        commentText: commentText,
        imagemURL: imagemURL,
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
    const  commentID = req.params.id;
    const { commentText, userID, tweetID } = req.body;

    Comment.findByPk( commentID)
        .then(comment => {
            if (!comment) {
                return res.status(404).send({ message: 'Comment not found' });
            }

            return comment.update({
                commentText: commentText,
                userID: userID,
                tweetID: tweetID
            });
        })
        .then(updatedComment => {
            res.status(200).send(updatedComment);
        })
        .catch(error => {
            res.status(500).send({ error: 'An error occurred while updating the comment' });
        });
};