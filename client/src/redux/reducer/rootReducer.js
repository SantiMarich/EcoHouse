import { combineReducers } from "redux";
import houseReducers from "./houseReducers";
import agentReducers from "./agentReducers";
import propertyReducers from "./propertyReducers";
import locationReducers from "./locationReducers";

const rootReducer = combineReducers({
  houses: houseReducers,
  agents: agentReducers,
  properties: propertyReducers,
  locations: locationReducers,
});

export default rootReducer;
