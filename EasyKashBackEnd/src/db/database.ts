import { Sequelize } from "sequelize";

// sequelize connection
const sequelize = new Sequelize(
  "mysql://root:agh1993agh@localhost:3306/easykash"
);

export default sequelize;
