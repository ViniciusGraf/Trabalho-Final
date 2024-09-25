const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Pagamento extends Model {}

Pagamento.init(
  {
    idpagamentos: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usuarios_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    valor: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    metodoPagamento: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    statusPagamento: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "pagamento",
    timestamps: false,
  }
);

module.exports = Pagamento;
