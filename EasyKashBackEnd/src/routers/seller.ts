import express, { Request, Response } from "express";
const Seller = require("../models/seller");

const router = express.Router();

router.get("/sellers", async (req: Request, res: Response) => {
  const seller = await Seller.findAll({});
  res.send(seller);
});

module.exports = router;
