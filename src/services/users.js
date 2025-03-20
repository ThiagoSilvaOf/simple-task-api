const User = require("../models/users")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()

 
class ServiceUser{
  async Create(name, email, password){
    if(!name) throw new Error("Favor informar o nome")
    if(!email) throw new Error("Favor informar o email")
    if(!password) throw new Error("Favor informar a senha")

    const existingUser = await User.findOne({ where: { email } } );
    if(existingUser){
      throw new Error("Usuário já cadastrado")
    }

    const hashPassword = await bcrypt.hash(password, 10);

    return User.create({name, email, password: hashPassword})
  }

  async FindAll(){
    return User.findAll()
  }

  async FindById(id){
    const user = User.findByPk(id)
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    return user;
  }

  async Update(id, name, email, password){
    const user = User.findByPk(id)
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    if(name) user.name = name
    if(email) user.email = email
    if(password) user.password = await bcrypt.hash(password, 10);

    await user.save();
    return user;
  }

  async Delete(id){
    const user = User.findByPk(id)
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    await user.destroy()
  }

  async Login(email, password){
    const user = await User.findOne({ where: { email } })
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const isPasswordValid = bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      throw new Error("Senha inválida");
    }

    const token = jwt.sign({id:user.id, email:user.email}, process.env.JWT_SECRET, {
      expiresIn:"1h"
    } )

    return  token;
  }
}

module.exports = new ServiceUser();