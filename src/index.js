const express = require("express");
const routerApi = require("./routes");
const {randomData} = require("./randomData.js")
const { DBService } = require("./services/db-service");

const port = 3001;
const main = async () => {
  await DBService.connect();

  // fillDataRandom
  randomData();  

  const app = express();
  app.use(express.json());

  routerApi(app);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

main();
