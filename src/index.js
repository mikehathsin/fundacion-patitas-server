const express = require("express");
const routerApi = require('./routes');

const { DBService } = require("./services/db-service");

const port = 3001;

const main = async () => {
  await DBService.connect();

  const app = express();
  app.use(express.json());


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  routerApi(app);

};

main();
