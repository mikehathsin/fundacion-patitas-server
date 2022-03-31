const { faker } = require("@faker-js/faker");

const { AdopterService } = require("./services/adopter-service");
const { AnimalService } = require("./services/animal-service");
const { ClinicHistoryService } = require("./services/clinicHistory-service");
const { RescuerService } = require("./services/rescuer-service");
const { SupervisorService } = require("./services/supervisor-service");
const { WorkerService } = require("./services/worker-service");
let randomData = () => {
  for (let i = 0; i < 10; i++) {
    AdopterService.create({
      name: faker.name.findName(),
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      address: faker.address.streetName(),
    });
    AnimalService.create({
      name: faker.name.findName(),
      type: faker.animal.type(),
      color: faker.commerce.color(),
      place_rescue: faker.address.streetName(),
      date_rescue: faker.date.between(
        "2020-01-01T00:00:00.000Z",
        "2022-01-01T00:00:00.000Z"
      ),
    });
    ClinicHistoryService.create({
      initial_status: "---",
      vaccine: "---",
      actual_status: "---",
    });
    RescuerService.create({
      name: faker.name.findName(),
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
    });
    SupervisorService.create({
      name: faker.name.findName(),
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
    });
    WorkerService.create({
      name: faker.name.findName(),
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
    });
  }
};
module.exports = {
    randomData
}