const Post = require('../sequelize').Post;

exports.getAllPosts = (req, res) => {
    Post.findAll().then(posts => {
        res.send(posts);
    });
}

exports.deletePost = (req, res) => {
    const tweetID = req.params.id;
    Post.destroy({
        where: { tweetID: tweetID }
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
    const { tweetText, imagemURL,  userID} = req.body;
    if (!tweetText || !imagemURL || !userID) {
        res.send({ message: 'Tweet created successfully' });
        return
    }
    Post.create({
        tweetText: tweetText,
        imagemURL : imagemURL,
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
    const tweetId = req.params.id;
    const { tweetText, imagemURL, userID, parent_tweet_id } = req.body;

    Post.findByPk(tweetId)
        .then(tweet => {
            if (!tweet) {
                return res.status(404).send({ message: 'Tweet not found' });
            }

            return tweet.update({
                tweetText: tweetText,
                imagemURL: imagemURL,
                userID: userID,
                parent_tweet_id: parent_tweet_id
            });
        })
        .then(updatedTweet => {
            res.status(200).send(updatedTweet);
        })
        .catch(error => {
            res.status(500).send({ error: 'An error occurred while updating the tweet' });
        });
};