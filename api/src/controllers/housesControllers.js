const { House, Agent } = require("../db");

const houseController = {
  getAllHouses: async (req, res) => {
    try {
      const houses = await House.findAll({ include: Agent });
      res.json(houses);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },

  getHouseById: async (req, res) => {
    const { id } = req.params;
    try {
      const house = await House.findByPk(id, { include: Agent });
      if (house) {
        res.json(house);
      } else {
        res.status(404).send("House not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },

  postHouse: async (req, res) => {
    const newHouseData = req.body;
    try {
      const newHouse = await House.create(newHouseData);
      res.json(newHouse);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },

  removeHouse: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedCount = await House.destroy({ where: { id } });
      if (deletedCount > 0) {
        res.send("House deleted successfully");
      } else {
        res.status(404).send("House not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },

  updateHouse: async (req, res) => {
    const { id } = req.params;
    const updatedHouseData = req.body;
    try {
      const [updatedCount] = await House.update(updatedHouseData, {
        where: { id },
      });
      if (updatedCount > 0) {
        res.send("House updated successfully");
      } else {
        res.status(404).send("House not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },
};

module.exports = houseController;
