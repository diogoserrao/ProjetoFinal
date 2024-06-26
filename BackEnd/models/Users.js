const { FOREIGNKEYS } = require("sequelize/lib/query-types");

module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        userID: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: type.STRING(50),
            unique: true,
            allowNull: false
        },
        email: {
            type: type.STRING(100),
            unique: true,
            allowNull: false
        },
        pass: {
            type: type.STRING(100),
            allowNull: false
        },
        fullname: {
            type: type.STRING(100),
            allowNull: false
        },
        bio: {
            type: type.TEXT,
            allowNull: true
        },
        profileImage: {
            type: type.STRING,
            allowNull: true
        }
    });
};
