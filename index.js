const express = require("express");
const app = express();
const routers = require("./src/routes/tasks")
const port = 3000;

app.use(express.json());
app.use(routers)

app.listen(port, () => {
  console.log(`Serviço rodando na porta ${port}`)
})