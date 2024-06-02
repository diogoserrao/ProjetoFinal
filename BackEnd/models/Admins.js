
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
                model: 'users', // Nome da tabela referenciada
                key: 'userID'   // Chave primária da tabela referenciada
            },
            allowNull: false
        },
        created_at: {
            type: type.DATE,
            defaultValue: type.NOW
        }
    }, {
        timestamps: false // Desabilitar timestamps automáticos (createdAt, updatedAt)
    });
};