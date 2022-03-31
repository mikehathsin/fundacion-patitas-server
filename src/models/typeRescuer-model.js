const { DBService } = require("../services/db-service");
const Schema= DBService.getSchema();
const schema = {
    _id: Schema.Types.ObjectId,
    description: String,
  };
const Rescuer = DBService.createModel("Rescuer", schema);

module.exports = {
  Rescuer,
};






