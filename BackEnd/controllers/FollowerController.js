const { Follower } = require('../sequelize'); 

exports.followUser = (req, res) => {
    const { userID, followerUserID } = req.body;

    if (!userID || !followerUserID) {
        res.status(400).send({ message: 'Missing required fields: userID or followerUserID' });
        return;
    }

    Follower.create({
        userID: userID,
        followerUserID: followerUserID
    })
    .then(follower => {
        res.status(201).send(follower);
    })
    .catch(error => {
        res.status(500).send({ error: 'An error occurred while creating the follower relationship' });
    });
};


exports.deleteFollow = (req, res) => {
    const { userID, followerUserID } = req.body;

    if (!userID || !followerUserID) {
        res.status(400).send({ message: 'Missing required fields: userID or followerUserID' });
        return;
    }

    Follower.destroy({
        where: {
            userID: userID,
            followerUserID: followerUserID
        }
    })
    .then(deleted => {
        if (deleted) {
            res.status(200).send({ message: 'Follower relationship deleted successfully' });
        } else {
            res.status(404).send({ message: 'Follower relationship not found' });
        }
    })
    .catch(error => {
        res.status(500).send({ error: 'An error occurred while deleting the follower relationship' });
    });
};