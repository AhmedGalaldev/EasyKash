"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Sellers", [
      {
        name: "Ahmed",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mohamed",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Sellers", null, {});
  },
};
