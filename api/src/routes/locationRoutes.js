const { Router } = require("express");

const {
  getAllLocations,
  getLocationById,
  postLocation,
  removeLocation,
  updateLocation,
} = require("../controllers/locationsControllers");

const locationRouter = Router();

locationRouter.get("/", getAllLocations);
locationRouter.get("/:id", getLocationById);
locationRouter.post("/", postLocation);
locationRouter.delete("/:id", removeLocation);
locationRouter.put("/:id", updateLocation);

module.exports = locationRouter;
