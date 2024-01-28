const { Router } = require("express");
const housesRouter = require("./houseRoutes.js");
const agentsRouter = require("./agentRoutes.js");
const mainRouter = Router();

mainRouter.use("/houses", housesRouter);
mainRouter.use("/agents", agentsRouter);

const router = mainRouter;

module.exports = router;
