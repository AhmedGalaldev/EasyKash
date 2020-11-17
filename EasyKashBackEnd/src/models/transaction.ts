import { Sequelize, Model, DataTypes } from "sequelize";
import sequelize from "../db/database";

interface TransactionAttributes {
  id: number;
  title: string;
  fees: number;
  amount: number;
}

interface TransactionInstance
  extends Model<TransactionAttributes>,
    TransactionAttributes {}

const Transaction = sequelize.define<TransactionInstance>("Transaction", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  title: {
    type: DataTypes.STRING,
  },
  fees: {
    type: DataTypes.DECIMAL(10, 2),
  },
  amount: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Transaction;
