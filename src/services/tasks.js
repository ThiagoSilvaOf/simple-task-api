const ModelsTasks = require("../models/tasks");
const models = new ModelsTasks;

class ServiceTasks{
  ListarTarefas(){
    return models.ListarTarefas();
  }

  ListarTarefa(id){
    return models.ListarTarefa(id);
  }

  CriarTarefa(title, description, status){
    return models.CriarTarefa(title, description, status)
  }

  AtualizarTarefa(id, title, description, status){
    return models.AtualizarTarefa(id, title, description, status)
  }

  DeletarTarefa(id){
    return models.DeletarTarefa(id)
  }
}

module.exports = ServiceTasks;
