const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Usuario extends Model {}

Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING
    },
    endereco: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'usuario',
    timestamps: false
});

module.exports = Usuario;
