const { DBService } = require("../services/db-service");

const Schema = DBService.getSchema();
const schema = {
  name: String,
  phone: String,
  email: String,
  enum:['Cuidador/a','Entrenador/a','Veterinario/a','Personal Administrativo'],
  schedule: String, //horario
};
const Worker = DBService.createModel("Worker", schema);

module.exports = {
  Worker,
};
