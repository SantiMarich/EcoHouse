import { combineReducers } from "redux";
import houseReducers from "./houseReducers";
import agentReducers from "./agentReducers";

const rootReducer = combineReducers({
  houses: houseReducers,
  agents: agentReducers,
});

export default rootReducer;
