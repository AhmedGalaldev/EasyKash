"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Transactions", [
      {
        title: "transaction test 1",
        fees: 5000.25,
        amount: 100,
        sellerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "transaction test 2",
        fees: 5000,
        amount: 50,
        sellerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "transaction test 3",
        fees: 3000,
        amount: 20,
        sellerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "transaction test 4",
        fees: 2000,
        amount: 50,
        sellerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "transaction test 5",
        fees: 5000,
        amount: 50,
        sellerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "transaction test 6",
        fees: 5000,
        amount: 50,
        sellerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "transaction test 1",
        fees: 5000.25,
        amount: 100,
        sellerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "transaction test 2",
        fees: 5000,
        amount: 50,
        sellerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "transaction test 3",
        fees: 3000,
        amount: 20,
        sellerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "transaction test 4",
        fees: 2000,
        amount: 50,
        sellerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "transaction test 5",
        fees: 5000,
        amount: 50,
        sellerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "transaction test 6",
        fees: 5000,
        amount: 50,
        sellerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Transactions", null, {});
  },
};
