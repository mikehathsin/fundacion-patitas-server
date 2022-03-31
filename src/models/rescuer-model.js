const { DBService } = require("../services/db-service");
const Schema = DBService.getSchema();
const schema = {
  name: String,
  phone: String,
  email: String,
  type: [{ type: Schema.Types.ObjectId, ref: "TypeRescuer" }],
};
const Rescuer = DBService.createModel("Rescuer", schema);

module.exports = {
  Rescuer,
};
