# Gerenciador de Tarefas

Este é um projeto de **API RESTful** para o gerenciamento de tarefas, com operações **CRUD** (Criar, Ler, Atualizar, Deletar). A API foi construída com **Node.js** e **Express** para o backend, utilizando **Sequelize** para se comunicar com o banco de dados **MySQL**. A aplicação também implementa **JWT (JSON Web Token)** para autenticação de usuários.

## Funcionalidades

- **Listar todas as tarefas** (`GET /api/v1/tasks`): Retorna todas as tarefas cadastradas para o usuário autenticado.
- **Buscar tarefa por ID** (`GET /api/v1/tasks/:id`): Retorna uma tarefa específica pelo ID para o usuário autenticado.
- **Adicionar nova tarefa** (`POST /api/v1/tasks`): Permite criar uma nova tarefa, com título, descrição e status. Apenas usuários autenticados podem criar tarefas.
- **Atualizar tarefa** (`PUT /api/v1/tasks/:id`): Atualiza os dados de uma tarefa existente, acessível apenas pelo usuário autenticado.
- **Deletar tarefa** (`DELETE /api/v1/tasks/:id`): Remove uma tarefa do banco de dados, restrito ao usuário que a criou.

- **Criar usuário** (`POST /api/v1/users`): Permite registrar um novo usuário com nome, e-mail e senha.
- **Login** (`POST /api/v1/login`): Gera um token JWT para autenticação de usuários.

## Tecnologias

- **Node.js** & **Express** para o backend
- **Sequelize** como ORM para interação com o banco de dados
- **MySQL** como banco de dados relacional
- **JWT (JSON Web Token)** para autenticação de usuários
- **Bcrypt.js** para criptografia de senhas


