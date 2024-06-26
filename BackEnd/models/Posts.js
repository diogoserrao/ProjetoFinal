module.exports = (sequelize, type) => {
    return sequelize.define('tweet', {
        tweetID: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userID: {
            type: type.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'userID'
            }
        },
        tweetText: {
            type: type.STRING(280),
            allowNull: true
        },
        tweetDate: {
            type: type.DATE,
            defaultValue: type.NOW
        },
        imagemURL: {
            type: type.STRING,
            allowNull: true
        },
        parent_tweet_id: {
            type: type.INTEGER,
            allowNull: true,
            references: {
                model: 'tweets',
                key: 'tweetID'
            }
        }
    });
};