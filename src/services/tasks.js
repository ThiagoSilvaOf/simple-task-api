const task = require("../models/tasks")

class ServiceTasks{
  async FindAll(){
    return task.findAll();
  }

  async FindById(id){
    const foundTask = await task.findByPk(id);
    if (!foundTask) {
      throw new Error('Tarefa não encontrada');
    }
    return foundTask;
  }

  async Create(title, description, status){
    if(!title){
      throw new Error("Favor informar Título");
    }else if(!status || !['não concluída', 'em andamento', 'concluída'].includes(status)){
      throw new Error("Favor informar o status ('não concluída', 'em andamento', 'concluída)");
    }
    return task.create({title, description, status})
  }

  async Update(id, title, description, status){
    const oldTask = await this.FindById(id)

    if (!oldTask) {
      throw new Error("Tarefa não encontrada");
    }

    if(title) oldTask.title = title;
    if(description) oldTask.description = description;
    if(status) oldTask.status = status;

    await oldTask.save()
    return oldTask

  }

  async Delete(id){
    const task = await this.FindById(id);
    if (!task) {
      throw new Error('Tarefa não encontrada');
    }
    task.destroy()
  }
}

module.exports = new ServiceTasks();
