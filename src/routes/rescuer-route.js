const express = require("express");
const { RescuerService } = require("../services/rescuer-service");

const router = express.Router();

app.post("/rescuer", async (req, res) => {
  try {
    const response = await RescuerService.create(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
app.get("/rescuer", async (req, res) => {
  try {
    const response = await RescuerService.read();
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
app.put("/rescuer", async (req, res) => {
  try {
    const response = await RescuerService.update(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
app.delete("/rescuer", async (req, res) => {
  try {
    const response = await RescuerService.delete(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
module.exports = router;