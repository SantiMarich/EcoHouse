// agentReducers.js
import * as actionTypes from "./ActionTypes";

const initialState = {
  agents: [],
  agent: null,
  error: null,
};

const agentReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_AGENTS_SUCCESS:
      return { ...state, agents: action.payload, error: null };

    case actionTypes.GET_AGENTS_FAILURE:
      return { ...state, agents: [], error: action.payload };

    case actionTypes.GET_AGENT_SUCCESS:
      return { ...state, agent: action.payload, error: null };

    case actionTypes.GET_AGENT_FAILURE:
      return { ...state, agent: null, error: action.payload };

    case actionTypes.CREATE_AGENT_SUCCESS:
      return {
        ...state,
        agents: [...state.agents, action.payload],
        error: null,
      };

    case actionTypes.CREATE_AGENT_FAILURE:
      return { ...state, error: action.payload };

    case actionTypes.UPDATE_AGENT_SUCCESS:
      const updatedAgents = state.agents.map((agent) =>
        agent.id === action.payload.id ? action.payload : agent
      );
      return { ...state, agents: updatedAgents, error: null };

    case actionTypes.UPDATE_AGENT_FAILURE:
      return { ...state, error: action.payload };

    case actionTypes.DELETE_AGENT_SUCCESS:
      const remainingAgents = state.agents.filter(
        (agent) => agent.id !== action.payload.id
      );
      return { ...state, agents: remainingAgents, error: null };

    case actionTypes.DELETE_AGENT_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default agentReducers;
