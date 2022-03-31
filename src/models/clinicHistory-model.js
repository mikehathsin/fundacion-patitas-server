const { DBService } = require("../services/db-service");

const Schema = DBService.getSchema();
const schema = {
  animal: [{ type: Schema.Types.ObjectId, ref: "Animal" }],
  worker: [{ type: Schema.Types.ObjectId, ref: "Worker" }],
  initial_status: String,
  vaccine: String,
  actual_status: String,
};

const ClinicHistory = DBService.createModel("ClinicHistory", schema);

module.exports = {
  ClinicHistory,
};
