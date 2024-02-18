const server = require("./src/app.js");
const { conn } = require("./src/db.js");
require("dotenv").config();
const { PORT } = process.env;

conn
  .sync({ force: false })
  .then(() => {
    server.listen(PORT, () => {});
  })
  .catch((error) => {
    console.error("Error syncing the database:", error);
  });
