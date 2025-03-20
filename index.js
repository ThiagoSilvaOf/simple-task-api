const express = require("express");
const app = express();
const taskRoutes = require("./src/routes/tasks");
const userRoutes = require("./src/routes/users");
const port = 3000;
const database = require("./src/database");


app.use(express.json());
app.use(taskRoutes);
app.use(userRoutes);

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
