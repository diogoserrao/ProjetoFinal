module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Like', {
        likeID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'userID'
            }
        },
        tweetID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tweets',
                key: 'tweetID'
            }
        },
        likedate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });
};
