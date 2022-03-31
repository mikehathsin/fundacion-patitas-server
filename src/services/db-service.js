const mongoose = require("mongoose");
const faker = require("@faker-js/faker");


const Adopter = require('../services/adopter-service');
const Animal = require('../services/animal-service');
const ClinicHistory = require('../services/clinicHistory-service');
const Rescuer = require('../services/rescuer-service');
const Supervisor = require('../services/supervisor-service');
const Worker = require('../services/worker-service');

class DBService {
  static async connect() {
    await mongoose.connect("mongodb://localhost:27017/fundacion-patitas");
  }

  static createModel(name, schema) {
    return mongoose.model(name, schema);
  }
  static getSchema(){
    return mongoose.Schema;
  }

  // static fillDataRandom(){
  //   for (let i = 0; i < 10; i++) {
  //     Adopter.create({
  //       name:faker.name.findName(),
  //       phone:faker.phone.phoneNumber(),
  //       email:faker.internet.email(),
  //       address:faker.address.streetName(),
  //     });      
  //   }
  //   for (let i = 0; i < 10; i++) {
  //     Animal.create({
  //       name:faker.name.findName(),
  //       type: faker.animal.type(),
  //       color:faker.commerce.color(),
  //       place_rescue:faker.address.streetName(),
  //       date_rescue:faker.date.between('2020-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z'),
  //     });      
  //   }

  //   for (let i = 0; i < 10; i++) {
  //     ClinicHistory.create({
  //       initial_status: '---',
  //       vaccine: '---',
  //       actual_status:'---',
      
  //     });      
  //   }

  //   for (let i = 0; i < 10; i++) {
  //     Rescuer.create({
  //       initial_status: '---',
  //       vaccine: '---',
  //       actual_status:'---',
      
  //     });      
  //   }
  //   for (let i = 0; i < 10; i++) {
  //     Supervisor.create({
  //       name:faker.name.findName(),
  //       phone:faker.phone.phoneNumber(),
  //       email:faker.internet.email(),
  //     });      
  //   }
  //   for (let i = 0; i < 10; i++) {
  //     Work.create({
  //       name:faker.name.findName(),
  //       phone:faker.phone.phoneNumber(),
  //       email:faker.internet.email(),
  //     });      
  //   }

  //   Supervisor.create();
  //   Worker.create();
  // }
}

module.exports = {
  DBService,
};
