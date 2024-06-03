const Like = require('../sequelize').Like;

exports.getAllLikes = (req, res) => {
    Like.findAll().then(likes => {
        res.send(likes);
    });
}

exports.deleteLike = (req, res) => {
    const likeID = req.params.id;
    Like.destroy({
        where: { likeID: likeID }
    })
    .then(deleted => {
        if (deleted) {
            res.send({ message: 'Like removed successfully' });
        } else {
            res.status(404).send({ message: 'Post not found' });
        }
    })
    .catch(error => {
        res.status(500).send({ error: 'An error occurred while removing the like' });
    });
};
exports.createLike = (req, res) =>{
    const {  userID, tweetID } = req.body;
    if (!userID || !tweetID) {
        res.send({ message: 'Post liked successfully' });
        return
    }
    Like.create({
        userID: userID,
        tweetID: tweetID
    })
    .then(like => {
        res.status(201).send(like);
    })
    .catch(error => {
        res.status(500).send({ error: 'An error occurred while liking the post' });
    });
};

exports.updateLike = (req, res) =>{

};