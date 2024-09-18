const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');

class Endereco extends Model {}

Endereco.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id'
        }
    },
    rua: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    complemento: {
        type: DataTypes.STRING
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'enderecos', 
    timestamps: false
});

Endereco.belongsTo(Usuario, { foreignKey: 'usuario_id' });
Usuario.hasMany(Endereco, { foreignKey: 'usuario_id' });

module.exports = Endereco;
