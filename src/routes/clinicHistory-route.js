const express = require("express");
const { ClinicHistoryService } = require("../services/clinicHistory-service");

const router = express.Router();

router.post("/clinicHistory", async (req, res) => {
  try {
    const response = await ClinicHistoryService.create(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
router.get("/clinicHistory", async (req, res) => {
  try {
    const response = await ClinicHistoryService.read();
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
router.put("/clinicHistory", async (req, res) => {
  try {
    const response = await ClinicHistoryService.update(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
router.delete("/clinicHistory", async (req, res) => {
  try {
    const response = await ClinicHistoryService.delete(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
module.exports = router;