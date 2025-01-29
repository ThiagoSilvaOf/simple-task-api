const express = require("express");
const app = express();
const routers = require("./src/routes/tasks");
const port = 3000;
const database = require("./src/database");

app.use(express.json());
app.use(routers);

database.db
  .sync({ force: true })
  .then((_) => {
    app.listen(port, () => {
      console.log(`Serviço rodando na porta ${port}`);
    });
  })
  .catch((error) => {
    console.error(`Não foi possivel realizar a conexão com o banco - ${error}`);
  });
