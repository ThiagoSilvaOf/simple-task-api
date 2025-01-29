# Gerenciador de Tarefas

Este é um projeto de **API RESTful** para o gerenciamento de tarefas, com operações **CRUD** (Criar, Ler, Atualizar, Deletar). A API foi construída com **Node.js** e **Express** para o backend, utilizando **Sequelize** para se comunicar com o banco de dados **MySQL**.

## Funcionalidades

- **Listar todas as tarefas** (`GET /api/v1/tasks`): Retorna todas as tarefas cadastradas.
- **Buscar tarefa por ID** (`GET /api/v1/tasks/:id`): Retorna uma tarefa específica pelo ID.
- **Adicionar nova tarefa** (`POST /api/v1/tasks`): Permite criar uma nova tarefa, com título, descrição e status.
- **Atualizar tarefa** (`PUT /api/v1/tasks/:id`): Atualiza os dados de uma tarefa existente.
- **Deletar tarefa** (`DELETE /api/v1/tasks/:id`): Remove uma tarefa do banco de dados.

## Tecnologias

- **Node.js** & **Express** para o backend
- **Sequelize** como ORM para interação com o banco de dados
- **MySQL** como banco de dados relacional
- **Jest** para testes unitários 
