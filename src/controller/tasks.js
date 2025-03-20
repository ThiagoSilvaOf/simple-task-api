const service = require("../services/tasks");

class ControllerTasks {
  async FindAll(req, res) {
    try {
      const userId = req.user.id
      const tasks = await service.FindAll(userId);
      res.status(200).json({ tasks });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async FindById(req, res) {
    try {
      const id = req.params.id;
      const userId = req.user.id; 
      const task = await service.FindById(id, userId);
      res.status(200).json({ task });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async Create(req, res) {
    try {
      const { title, description, status } = req.body;
      const userId = req.user.id;
      await service.Create(title, description, status, userId);
      res.status(201).json({ mensagem: "Tarefa Adicionada com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async Update(req, res) {
    try {
      const id = parseInt(req.params.id, 10); 
      const { title, description, status } = req.body;
      const userId = req.user.id; 
      await service.Update(id, title, description, status, userId);
      res.status(200).json({ mensagem: "Tarefa Atualizada com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async Delete(req, res) {
    try {
      const id = req.params.id;
      const userId = req.user.id; 
      await service.Delete(id, userId);
      res.status(204).json();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ControllerTasks();
