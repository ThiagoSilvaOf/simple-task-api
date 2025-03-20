const database = require("../database");

class Task{
  constructor(){
    this.model = database.db.define("tasks", {
      id:{
        type: database.db.Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      title:{
        type:database.db.Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      description:{
        type:database.db.Sequelize.STRING,
        allowNull:true
      },
      status:{
        type:database.db.Sequelize.ENUM('não concluída', 'em andamento', 'concluída'),
        allowNull:false,
        defaultValue:'não concluída'
      },
      userId:{
        type: database.db.Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"users",
          key:"id"
        }
      }
    })
  }
}

module.exports = new Task().model;