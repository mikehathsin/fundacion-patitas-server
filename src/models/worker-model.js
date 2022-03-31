const { DBService } = require("../services/db-service");

const Schema = DBService.getSchema();
const schema = {
  name: String,
  phone: String,
  email: String,
  type:['Cuidador/a','Entrenador/a','Veterinario/a','Personal Administrativo'],
  schedule: ['Matutino','Vespertino'], //horario
};
const Worker = DBService.createModel("Worker", schema);

module.exports = {
  Worker,
};
