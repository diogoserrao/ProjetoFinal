const Post = require('../sequelize').Post;

exports.getAllPosts = (req, res) => {
    Post.findAll().then(posts => {
        res.send(posts);
    });
}

exports.deletePost = (req, res) => {
    const postID = req.params.id;
    Post.destroy({
        where: { postID: postID }
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
exports.createPost = (req, res) =>{

};

exports.updatePost = (req, res) =>{

};