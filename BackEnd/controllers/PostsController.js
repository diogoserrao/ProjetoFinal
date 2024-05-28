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
            res.send({ message: 'Tweet deleted successfully' });
        } else {
            res.status(404).send({ message: 'Tweet not found' });
        }
    })
    .catch(error => {
        res.status(500).send({ error: 'An error occurred while deleting the tweet' });
    });
};
exports.createPost = (req, res) =>{
    const { tweetText, tweetDate, userID} = req.body;
    if (!tweetText || !tweetDate || !userID) {
        res.send({ message: 'Tweet created successfully' });
        return
    }
    Post.create({
        tweetText: tweetText,
        tweetDate: tweetDate,
        userID: userID
    })
    .then(user => {
        res.status(201).send(user);
    })
    .catch(error => {
        res.status(500).send({ error: 'An error occurred while creating the tweet' });
    });
};

exports.updatePost = (req, res) =>{

};