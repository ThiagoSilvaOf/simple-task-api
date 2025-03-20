const TaskModel = require("../models/tasks")

class ServiceTasks{
  async FindAll(userId){
    return TaskModel.findAll({ where:{ userId } });
  }

  async FindById(id, userId){
    const task = await TaskModel.findOne({
      where: { id, userId }, 
    });
    if (!task) {
      throw new Error('Tarefa não encontrada ou você não tem permissão para acessá-la');
    }
    return task;
  }

  async Create(title, description, status, userId){
    if(!title){
      throw new Error("Favor informar Título");
    }else if(!status || !['não concluída', 'em andamento', 'concluída'].includes(status)){
      throw new Error("Favor informar o status ('não concluída', 'em andamento', 'concluída)");
    }
    return TaskModel.create({title, description, status, userId})
  }

  async Update(id, title, description, status, userId){
    const oldTask = await this.FindById(id, userId)

    if (!oldTask) {
      throw new Error("Tarefa não encontrada");
    }

    if(title) oldTask.title = title;
    if(description) oldTask.description = description;
    if(status) oldTask.status = status;

    await oldTask.save()
    return oldTask

  }

  async Delete(id, userId){
    const task = await this.FindById(id, userId);
    if (!task) {
      throw new Error('Tarefa não encontrada');
    }
    task.destroy()
  }
}

module.exports = new ServiceTasks();
