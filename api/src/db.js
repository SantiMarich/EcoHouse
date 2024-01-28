require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const AgentModel = require("./models/Agent");
const HouseModel = require("./models/House");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecohouse`,
  {
    logging: false,
    native: false,
  }
);

// const sequelize = new Sequelize(DB_DEPLOY, {
//   logging: false,
//   native: false,
//   dialectOptions: {
//     ssl: {
//       require: true,
//     },
//   },
// });

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Define las relaciones aquí
modelDefiners.forEach((model) => model(sequelize));

const House = HouseModel(sequelize);
const Agent = AgentModel(sequelize);

// Establece la relación muchos a uno entre House y Agent

House.belongsTo(Agent, { as: "agent", foreignKey: "agentId" });

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

module.exports = {
  House, // Cambia esta línea
  Agent, // Cambia esta línea
  conn: sequelize,
};
