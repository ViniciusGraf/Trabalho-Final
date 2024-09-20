const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Categoria extends Model {}

Categoria.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "categoria",
    timestamps: false,
  }
);

module.exports = Categoria;
