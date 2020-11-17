import { Sequelize, Model, DataTypes } from "sequelize";
import sequelize from "../db/database";

interface SellerAttributes {
  id: number;
  name: string;
}

interface SellerInstance extends Model<SellerAttributes>, SellerAttributes {}

const Seller = sequelize.define<SellerInstance>("Seller", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  name: {
    type: DataTypes.STRING,
  },
});

module.exports = Seller;
