const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost", // Cambia esto según tu configuración
  username: "postgres", // Cambia esto según tu configuración
  password: "33814489", // Cambia esto según tu configuración
  database: "ecohouse", // Cambia esto según tu configuración
});

module.exports = sequelize;
