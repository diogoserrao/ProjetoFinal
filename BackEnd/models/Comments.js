module.exports = (sequelize, type) => {
    return sequelize.define('comment', {
        commentID: {
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
        tweetID: {
            type: type.INTEGER,
            allowNull: false,
            references: {
                model: 'tweets',
                key: 'tweetID'
            }
        },
        commentText: {
            type: type.TEXT,
            allowNull: false
        },
        commentDate: {
            type: type.DATE,
            defaultValue: type.NOW
        }
    });
};
