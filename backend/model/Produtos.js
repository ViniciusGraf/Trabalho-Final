const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Produtos extends Model {}

Produtos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    descricao: {
      type: DataTypes.TEXT,
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2),
    },
  },
  {
    sequelize,
    modelName: "produtos",
    timestamps: false,
  }
);

module.exports = Produtos;
