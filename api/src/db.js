require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const AgentModel = require("./models/Agent");
const HouseModel = require("./models/House");
const LocationModel = require("./models/Location");
const pg = require("pg");

const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecohouse`,
//   {
//     logging: false,
//     native: false,
//   }
// );

const sequelize = new Sequelize(DB_DEPLOY, {
  logging: false,
  native: false,
  dialectModule: pg,
});

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

const House = HouseModel(sequelize);
const Agent = AgentModel(sequelize);
const Location = LocationModel(sequelize);

House.belongsTo(Agent, { as: "agent", foreignKey: "agentId" });
House.belongsTo(Location, { as: "location", foreignKey: "locationId" });

module.exports = {
  sequelize,
  House,
  Agent,
  Location,

  conn: sequelize,
};
