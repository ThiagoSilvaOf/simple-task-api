const ServiceTasks = require("../services/tasks");
const service = new ServiceTasks();

class ControllerTasks {
  ListarTarefas(req, res) {
    try {
      const tasks = service.ListarTarefas();
      res.status(200).json({ tasks });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  ListarTarefa(req, res) {
    try {
      const id = req.params.id;
      const task = service.ListarTarefa(id);
      res.status(200).json({ task });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  CriarTarefa(req, res) {
    try {
      const { title, description, status } = req.body;
      service.CriarTarefa(title, description, status);
      res.status(201).json({ mensagem: "Tarefa Adicionada com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  AtualizarTarefa(req, res) {
    try {
      const id = parseInt(req.params.id, 10); 
      const { title, description, status } = req.body;
      service.AtualizarTarefa(id, title, description, status);
      res.status(200).json({ mensagem: "Tarefa Atualizada com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  DeletarTarefa(req, res) {
    try {
      const id = req.params.id;
      service.DeletarTarefa(id);
      res.status(204).json();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ControllerTasks;
