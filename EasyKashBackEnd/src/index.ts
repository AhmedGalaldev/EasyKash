import express, { Application } from "express";
import sequelize from "./db/database";
const sellerRouter = require("./routers/seller");
const transactionRouter = require("./routers/transaction");

const app: Application = express();

const port = process.env.PORT || 3000;
app.use(express.json());

app.use(sellerRouter);
app.use(transactionRouter);

//  Test DB
sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err: any) => console.log("Error: " + err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
