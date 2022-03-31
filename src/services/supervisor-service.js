const { Supervisor } = require("../models/supervisor-model");

class SupervisorService {
  static async create({ name, ...data }) {
    if (!name) {
      throw new Error("the 'name' field is required");
    }

    const supervisor = new Supervisor({ name, ...data });
    const response = await supervisor.save();
    return response;
  }

  static async read() {
    const response = await Supervisor.find();
    return response;
  }

  static async update({ _id, ...data }) {
    const filter = { _id };

    await Supervisor.findOneAndUpdate(filter, data);
    const response = await Supervisor.findOne(filter);
    return response;
  }

  static async delete({ _id }) {
    const filter = { _id };
    const response = await Supervisor.deleteOne(filter);
    return response;
  }
}

module.exports = {
  SupervisorService,
};
