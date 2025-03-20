const express = require("express");
const ControllerTasks = require("../controller/tasks");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

router.get("/api/v1/tasks", authMiddleware, ControllerTasks.FindAll);
router.get("/api/v1/tasks/:id", authMiddleware, ControllerTasks.FindById);
router.post("/api/v1/tasks", authMiddleware, ControllerTasks.Create);
router.put("/api/v1/tasks/:id", authMiddleware, ControllerTasks.Update);
router.delete("/api/v1/tasks/:id", authMiddleware, ControllerTasks.Delete);

module.exports = router;
