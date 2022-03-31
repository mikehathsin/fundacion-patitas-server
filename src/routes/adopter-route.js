const express = require("express");
const { AdopterService } = require("../services/adopter-service");

const router = express.Router();

app.post("/adopter", async (req, res) => {
  try {
    const response = await AdopterService.create(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
app.get("/adopter", async (req, res) => {
  try {
    const response = await AdopterService.read();
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
app.put("/adopter", async (req, res) => {
  try {
    const response = await AdopterService.update(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
app.delete("/adopter", async (req, res) => {
  try {
    const response = await AdopterService.delete(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
module.exports = router;