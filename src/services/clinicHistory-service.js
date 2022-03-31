const { ClinicHistory } = require("../models/clinicHistory-model");

class ClinicHistoryService {
  static async create({ initial_status, ...data }) {
    if (!initial_status) {
      throw new Error("the 'initial_status' field is required");
    }

    const clinicHistory = new ClinicHistory({ initial_status, ...data });
    const response = await clinicHistory.save();
    return response;
  }

  static async read() {
    const response = await ClinicHistory.find();
    return response;
  }

  static async update({ _id, ...data }) {
    const filter = { _id };

    await ClinicHistory.findOneAndUpdate(filter, data);
    const response = await ClinicHistory.findOne(filter);
    return response;
  }

  static async delete({ _id }) {
    const filter = { _id };
    const response = await ClinicHistory.deleteOne(filter);
    return response;
  }
}

module.exports = {
  ClinicHistoryService,
};
