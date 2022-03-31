const { Worker } = require("../models/worker-model");

class WorkerService {
  static async create({ name, ...data }) {
    if (!name) {
      throw new Error("the 'name' field is required");
    }

    const worker = new Worker({ name, ...data });
    const response = await worker.save();
    return response;
  }

  static async read() {
    const response = await Worker.find();
    return response;
  }

  static async update({ _id, ...data }) {
    const filter = { _id };

    await Worker.findOneAndUpdate(filter, data);
    const response = await Worker.findOne(filter);
    return response;
  }

  static async delete({ _id }) {
    const filter = { _id };
    const response = await Worker.deleteOne(filter);
    return response;
  }
}

module.exports = {
  WorkerService,
};
