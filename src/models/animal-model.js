const { DBService } = require("../services/db-service");

const Animal = DBService.createModel("Animal", { name: String });

module.exports = {
  Animal,
};
