const database = require("../database")
const Task = require("./tasks");

class User{
  constructor(){
    this.model = database.db.define("users", {
      id:{
        type:database.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      name:{
        type:database.db.Sequelize.STRING,
        allowNull:false
      },
      email:{
        type:database.db.Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      password:{
        type:database.db.Sequelize.STRING,
        allowNull:false,
      },
    });

    this.model.hasMany(Task, {
      foreignKey: "userId",
      as: "tasks"
    });

    Task.belongsTo(this.model, {
      foreignKey: "userId",
      as: "user",
    });
  }
}

module.exports = new User().model