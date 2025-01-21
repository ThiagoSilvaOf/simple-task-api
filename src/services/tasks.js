const ModelsTasks = require("../models/tasks");
const models = new ModelsTasks;

class ServiceTasks{
  ListarTarefas(){
    return models.ListarTarefas();
  }

  CriarTarefa(title, description, status){
    return models.CriarTarefa(title, description, status)
  }
}

module.exports = ServiceTasks;
