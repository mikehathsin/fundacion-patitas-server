const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

class DBService {
  static async connect() {
    await mongoose.connect("mongodb://localhost:27017/fundacion-patitas");
  }

  static createModel(name, schema) {
    return mongoose.model(name, schema);
  }
  static getSchema() {
    return mongoose.Schema;
  }

}

module.exports = {
  DBService,
};
