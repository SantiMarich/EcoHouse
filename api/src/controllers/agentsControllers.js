const { Agent } = require("../db");

const agentController = {
  getAllAgents: async (req, res) => {
    try {
      const agents = await Agent.findAll();
      res.json(agents);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },

  getAgentById: async (req, res) => {
    const { id } = req.params;
    try {
      const agent = await Agent.findByPk(id);
      if (agent) {
        res.json(agent);
      } else {
        res.status(404).send("Agent not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },

  postAgent: async (req, res) => {
    const newAgentData = req.body;
    try {
      const newAgent = await Agent.create(newAgentData);
      res.json(newAgent);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },

  removeAgent: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedCount = await Agent.destroy({ where: { id } });
      if (deletedCount > 0) {
        res.send("Agent deleted successfully");
      } else {
        res.status(404).send("Agent not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },

  updateAgent: async (req, res) => {
    const { id } = req.params;
    const updatedAgentData = req.body;
    try {
      const [updatedCount] = await Agent.update(updatedAgentData, {
        where: { id },
      });
      if (updatedCount > 0) {
        res.send("Agent updated successfully");
      } else {
        res.status(404).send("Agent not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },
};

module.exports = agentController;
