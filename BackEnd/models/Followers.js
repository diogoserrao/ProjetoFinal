module.exports = (sequelize, type) => {
    return sequelize.define('follower', {
        followerID: {
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
        followerUserID: {
            type: type.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'userID'
            }
        }
    }, {
        indexes: [
            {
                unique: true,
                fields: ['userID', 'followerUserID']
            }
        ]
    });
};
