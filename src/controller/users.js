const serviceUser = require("../services/users");

class ControllerUsers {
  async createUser(req, res) {
    try {
      const { name, email, password } = req.body;
      const newUser = await serviceUser.Create(name, email, password);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const token = await serviceUser.Login(email, password);
      return res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await serviceUser.FindById(id);
      return res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, password } = req.body;
      await serviceUser.Update(id, nome, email, password);
      return res.status(200).json({ message: "Dados atualizado com sucesso" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await serviceUser.Delete(id);
      return res.status(200).json({ message: "Deletado com sucesso" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new ControllerUsers();
