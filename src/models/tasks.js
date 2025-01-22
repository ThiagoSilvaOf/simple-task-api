let tasks = [
  {
    id: 1,
    title: "Aprender Node.js",
    description: "Estudar Node.js 2Hr por dia",
    status: "Andamento",
  },
];

class ModelsTasks {
  ListarTarefas() {
    return tasks;
  }

  ListarTarefa(id) {
    const index = tasks.findIndex((task) => task.id == id);
    if (index !== -1) {
      return tasks[index];
    } else {
      throw new Error("Verifique se o identificador da tarefa existe!");
    }
  }

  CriarTarefa(title, description, status) {
    if (!title || !description || !status) {
      throw new Error(
        "Dados Incompletos, informe todos os dados referente a sua tarefa!"
      );
    }

    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      status: status,
    };
    tasks.push(newTask);
    return newTask;
  }

  AtualizarTarefa(id, title, description, status) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      if (title != undefined) tasks[index].title = title;
      if (description != undefined) tasks[index].description = description;
      if (status != undefined) tasks[index].status = status;
    } else {
      throw new Error("Verifique se o identificador da tarefa existe!");
    }
  }

  DeletarTarefa(id) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);
    } else {
      throw new Error("Verifique se o identificador da tarefa existe!");
    }
  }
}

module.exports = ModelsTasks;
