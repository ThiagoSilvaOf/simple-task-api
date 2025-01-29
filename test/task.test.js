// const { describe, expect, it } = require("@jest/globals");
// const ServiceTasks = require("../src/services/tasks");

// describe("Crud Tarefas", () => {
//   const service = new ServiceTasks();

//   it("Criar Tarefa", () => {
//     const tarefa = {
//       title: "Teste",
//       description: "Testando a func criar tarefas",
//       status: "Andamento",
//     };
//     service.CriarTarefa(tarefa.title, tarefa.description, tarefa.status);

//     const tarefas = service.ListarTarefas();
//     const tarefaCriada = tarefas.find(t => t.title === tarefa.title && t.description === tarefa.description);
    
//     expect(tarefaCriada).toBeDefined();
//     expect(tarefaCriada.title).toBe(tarefa.title);
//     expect(tarefaCriada.description).toBe(tarefa.description); 
//     expect(tarefaCriada.status).toBe(tarefa.status); 
//   });

//   it("Alterar Tarefa", () => {
//     const newTitle = "Novo Title"
//     service.AtualizarTarefa(2, newTitle)
//     const task = service.ListarTarefa(2)
//     expect(task.title).toBe(newTitle);
//   })

//   it("Deletar uma Tarefa", () => {
//     const task = service.ListarTarefa(2)
//     const tasks = service.ListarTarefas();

//     service.DeletarTarefa(2)
//     expect(task).not.toBe(tasks[2])
//   })
// });
