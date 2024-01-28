const { Router } = require("express");

const {
  getAllAgents,
  getAgentById,
  postAgent,
  removeAgent,
  updateAgent,
} = require("../controllers/agentsControllers");

const agentsRouter = Router();

agentsRouter.get("/", getAllAgents);
agentsRouter.get("/:id", getAgentById);
agentsRouter.post("/", postAgent);
agentsRouter.delete("/:id", removeAgent);
agentsRouter.put("/:id", updateAgent);

module.exports = agentsRouter;
