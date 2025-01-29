const {Sequelize} = require("sequelize");
require("dotenv").config()

class Database{
  constructor(){
    this.init();
  }

  init(){
    this.db = new Sequelize({
      host:process.env.DB_HOST,
      database:process.env.DB_NAME,
      username:process.env.DB_USER,
      password:process.env.DB_PASSWORD,
      dialect:"mysql"

    })
  }
}

module.exports = new Database()