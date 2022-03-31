const express = require("express");
const { AnimalService } = require("../services/animal-service");


const router = express.Router();

router.post("/animal", async (req, res) => {
  try {
    const response = await AnimalService.create(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
router.get("/animal", async (req, res) => {
  try {
    const response = await AnimalService.read();
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
router.put("/animal", async (req, res) => {
  try {
    const response = await AnimalService.update(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
router.delete("/animal", async (req, res) => {
  try {
    const response = await AnimalService.delete(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
module.exports = router;