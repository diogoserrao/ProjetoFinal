const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('administrator', {
        adminID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userID: {
            type: DataTypes.INTEGER,
            unique: true,
            references: {
                model: 'users', // Nome da tabela referenciada
                key: 'userID'   // Chave primária da tabela referenciada
            },
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        timestamps: false // Desabilitar timestamps automáticos (createdAt, updatedAt)
    });
};