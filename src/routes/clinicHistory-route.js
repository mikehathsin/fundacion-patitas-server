const express = require("express");
const { ClinicHistoryService } = require("../services/clinicHistory-service");

const router = express.Router();

app.post("/clinicHistory", async (req, res) => {
  try {
    const response = await ClinicHistoryService.create(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
app.get("/clinicHistory", async (req, res) => {
  try {
    const response = await ClinicHistoryService.read();
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
app.put("/clinicHistory", async (req, res) => {
  try {
    const response = await ClinicHistoryService.update(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
app.delete("/clinicHistory", async (req, res) => {
  try {
    const response = await ClinicHistoryService.delete(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
module.exports = router;