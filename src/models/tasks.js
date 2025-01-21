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

  CriarTarefa(title, description, status) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      status: status,
    };
    tasks.push(newTask)
    return newTask;
  }
}

module.exports = ModelsTasks;
