const express = require("express");
const { RescuerService } = require("../services/rescuer-service");

const router = express.Router();

router.post("/rescuer", async (req, res) => {
  try {
    const response = await RescuerService.create(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
router.get("/rescuer", async (req, res) => {
  try {
    const response = await RescuerService.read();
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
router.put("/rescuer", async (req, res) => {
  try {
    const response = await RescuerService.update(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
router.delete("/rescuer", async (req, res) => {
  try {
    const response = await RescuerService.delete(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
module.exports = router;