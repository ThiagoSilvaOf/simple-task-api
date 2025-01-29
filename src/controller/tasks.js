const service = require("../services/tasks");


class ControllerTasks {
  async FindAll(req, res) {
    try {
      const tasks = await service.FindAll();
      res.status(200).json({ tasks });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async FindById(req, res) {
    try {
      const id = req.params.id;
      const task = await service.FindById(id);
      res.status(200).json({ task });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async Create(req, res) {
    try {
      const { title, description, status } = req.body;
      await service.Create(title, description, status);
      res.status(201).json({ mensagem: "Tarefa Adicionada com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async Update(req, res) {
    try {
      const id = parseInt(req.params.id, 10); 
      const { title, description, status } = req.body;
      await service.Update(id, title, description, status);
      res.status(200).json({ mensagem: "Tarefa Atualizada com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async Delete(req, res) {
    try {
      const id = req.params.id;
      await service.Delete(id);
      res.status(204).json();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ControllerTasks();
