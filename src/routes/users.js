const express = require("express");
const ControllerUsers = require("../controller/users");
const router = express.Router()

router.get("/api/v1/users/:id", ControllerUsers.getUserById)
router.post("/api/v1/users", ControllerUsers.createUser)
router.post("/api/v1/login", ControllerUsers.login)
router.put("/api/v1/users/:id", ControllerUsers.update)
router.delete("/api/v1/users/:id", ControllerUsers.delete)

module.exports = router;