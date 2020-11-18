import express, { Request, Response } from "express";

const Transaction = require("../models/transaction");
const getPagingData = require("../pagingAndPagination/paging");
const getPagination = require("../pagingAndPagination/pagination");

const router = express.Router();

router.get("/transactions", async (req: Request, res: Response) => {
  const { page, per_page, seller_id } = req.query;
  const { limit, offset } = getPagination(page, per_page);

  await Transaction.findAndCountAll({
    where: {
      sellerId: seller_id,
    },
    limit: limit,
    offset,
  })
    .then((data: any) => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch((error: any) => {
      res.status(500).send({
        message:
          error.message || "Some error occurred while retrieving transactions.",
      });
    });
});

module.exports = router;
