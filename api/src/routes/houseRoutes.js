const { Router } = require("express");

const {
  getAllHouses,
  getHouseById,
  postHouse,
  removeHouse,
  updateHouse,
} = require("../controllers/housesControllers");

const housesRouter = Router();

housesRouter.get("/", getAllHouses);
housesRouter.get("/:id", getHouseById);
housesRouter.post("/", postHouse);
housesRouter.delete("/:id", removeHouse);
housesRouter.put("/:id", updateHouse);

module.exports = housesRouter;
