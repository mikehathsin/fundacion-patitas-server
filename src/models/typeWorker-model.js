const { DBService } = require("../services/db-service");

const Schema= DBService.getSchema();
const schema = {
  _id: Schema.Types.ObjectId,
  name: String,
};
const Worker = DBService.createModel("TypeWorker", schema);

module.exports = {
  Worker,
};

