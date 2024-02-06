const { Router } = require("express");
const housesRouter = require("./houseRoutes.js");
const agentsRouter = require("./agentRoutes.js");
const locationRouter = require("./locationRoutes.js");
const mainRouter = Router();

mainRouter.use("/houses", housesRouter);
mainRouter.use("/agents", agentsRouter);
mainRouter.use("/location", locationRouter);

const router = mainRouter;

module.exports = router;
