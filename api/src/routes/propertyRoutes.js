const { Router } = require("express");

const {
  getAllProperties,
  getPropertyById,
  postProperty,
  removeProperty,
  updateProperty,
} = require("../controllers/propertiesControllers");

const propertyRouter = Router();

propertyRouter.get("/", getAllProperties);
propertyRouter.get("/:id", getPropertyById);
propertyRouter.post("/", postProperty);
propertyRouter.delete("/:id", removeProperty);
propertyRouter.put("/:id", updateProperty);

module.exports = propertyRouter;
