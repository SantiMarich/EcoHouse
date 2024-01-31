const { Property } = require("../db");

const propertyController = {
  getAllProperties: async (req, res) => {
    try {
      const properties = await Property.findAll();
      res.json(properties);
    } catch (error) {
      console.error(error);
      res.status(500).send(`Internal Server Error: ${error.message}`);
    }
  },

  getPropertyById: async (req, res) => {
    const { id } = req.params;
    try {
      const property = await Property.findByPk(id);
      if (property) {
        res.json(property);
      } else {
        res.status(404).json({ error: "Property not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(`Internal Server Error: ${error.message}`);
    }
  },

  postProperty: async (req, res) => {
    const newPropertyData = req.body;
    try {
      const newProperty = await Property.create(newPropertyData);
      res.json(newProperty);
    } catch (error) {
      console.error(error);
      res.status(500).send(`Internal Server Error: ${error.message}`);
    }
  },

  removeProperty: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedProperty = await Property.destroy({ where: { id } });
      if (deletedProperty > 0) {
        res.json({ message: "Property deleted successfully" });
      } else {
        res.status(404).json({ error: "Location not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(`Internal Server Error: ${error.message}`);
    }
  },

  updateProperty: async (req, res) => {
    const { id } = req.params;
    const updatedPropertyData = req.body;
    try {
      const [updatedProperty] = await Property.update(updatedPropertyData, {
        where: { id },
      });
      if (updatedProperty > 0) {
        res.json({ message: "Property updated successfully" });
      } else {
        res.status(404).json({ error: "Property not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(`Internal Server Error: ${error.message}`);
    }
  },
};

module.exports = propertyController;
