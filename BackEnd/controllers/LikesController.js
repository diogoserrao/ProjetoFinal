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
            res.send({ message: 'Post deleted successfully' });
        } else {
            res.status(404).send({ message: 'Post not found' });
        }
    })
    .catch(error => {
        res.status(500).send({ error: 'An error occurred while deleting the post' });
    });
};
exports.createLike = (req, res) =>{

};

exports.updateLike = (req, res) =>{

};