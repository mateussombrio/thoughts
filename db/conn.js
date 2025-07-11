const dotenv = require("dotenv");

dotenv.config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
  }
);

try {
  sequelize.authenticate();
  console.log("Conexão bem-sucedida");
} catch (error) {
  console.log("Não foi possível conectar: ", error);
}

module.exports = sequelize;
