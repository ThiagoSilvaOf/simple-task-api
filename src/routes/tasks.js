const express = require("express");
const ControllerTasks = require("../controller/tasks");
const router = express.Router()

const controller = new ControllerTasks()

router.get("/api/v1/tasks", controller.ListarTarefas)
router.get("/api/v1/tasks/:id", controller.ListarTarefa)
router.post("/api/v1/tasks", controller.CriarTarefa)
router.put("/api/v1/tasks/:id", controller.AtualizarTarefa)
router.delete("/api/v1/tasks/:id", controller.DeletarTarefa)

module.exports = router;