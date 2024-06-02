module.exports = (sequelize, type) => {
    return sequelize.define('administrator', {
        adminID: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userID: {
            type: type.INTEGER,
            unique: true,
            references: {
                model: 'users', 
                key: 'userID'   
            },
            allowNull: false
        },
        created_at: {
            type: type.DATE,
            defaultValue: type.NOW
        }
    });
};
