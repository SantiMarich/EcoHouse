const { Location } = require("../db");

const locationController = {
  getAllLocations: async (req, res) => {
    try {
      const locations = await Location.findAll();
      res.json(locations);
    } catch (error) {
      console.error(error);
      res.status(500).send(`Internal Server Error: ${error.message}`);
    }
  },

  getLocationById: async (req, res) => {
    const { id } = req.params;
    try {
      const location = await Location.findByPk(id);
      if (location) {
        res.json(location);
      } else {
        res.status(404).json({ error: "Location not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(`Internal Server Error: ${error.message}`);
    }
  },

  postLocation: async (req, res) => {
    const newLocationData = req.body;
    try {
      const newLocation = await Location.create(newLocationData);
      res.json(newLocation);
    } catch (error) {
      console.error(error);
      res.status(500).send(`Internal Server Error: ${error.message}`);
    }
  },

  removeLocation: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedLocation = await Location.destroy({ where: { id } });
      if (deletedLocation > 0) {
        res.json({ message: "Location deleted successfully" });
      } else {
        res.status(404).json({ error: "Location not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(`Internal Server Error: ${error.message}`);
    }
  },

  updateLocation: async (req, res) => {
    const { id } = req.params;
    const updatedLocationData = req.body;
    try {
      const [updatedLocation] = await Location.update(updatedLocationData, {
        where: { id },
      });
      if (updatedLocation > 0) {
        res.json({ message: "Location updated successfully" });
      } else {
        res.status(404).json({ error: "Location not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(`Internal Server Error: ${error.message}`);
    }
  },
};

module.exports = locationController;
