const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Endereco extends Model {}

Endereco.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Endereco_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Endereco,
        key: "id",
      },
    },
    valor: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    data_Endereco: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Enderecos",
    timestamps: false,
  }
);

module.exports = Endereco;
