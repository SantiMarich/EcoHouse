import { combineReducers } from "redux";
import houseReducers from "./houseReducers";
import agentReducers from "./agentReducers";
import locationReducers from "./locationReducers";

const rootReducer = combineReducers({
  houses: houseReducers,
  agents: agentReducers,
  locations: locationReducers,
});

export default rootReducer;
