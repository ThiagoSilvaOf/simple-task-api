const express = require("express");
const ControllerTasks = require("../controller/tasks");
const router = express.Router()


router.get("/api/v1/tasks", ControllerTasks.FindAll)
router.get("/api/v1/tasks/:id", ControllerTasks.FindById)
router.post("/api/v1/tasks", ControllerTasks.Create)
router.put("/api/v1/tasks/:id", ControllerTasks.Update)
router.delete("/api/v1/tasks/:id", ControllerTasks.Delete)

module.exports = router;