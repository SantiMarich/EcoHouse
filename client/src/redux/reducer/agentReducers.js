// agentReducers.js
import * as actionTypes from "../actions/ActionTypes";

const initialState = {
  agents: [],
  agent: null,
  error: null,
  loading: false,
};

const agentReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_AGENTS_REQUEST:
    case actionTypes.GET_AGENT_REQUEST:
    case actionTypes.CREATE_AGENT_REQUEST:
    case actionTypes.UPDATE_AGENT_REQUEST:
    case actionTypes.DELETE_AGENT_REQUEST:
      return { ...state, loading: true, error: null };

    case actionTypes.GET_AGENTS_SUCCESS:
      return { ...state, loading: false, agents: action.payload, error: null };

    case actionTypes.GET_AGENTS_FAILURE:
    case actionTypes.GET_AGENT_FAILURE:
      return { ...state, loading: false, agents: [], error: action.payload };

    case actionTypes.GET_AGENT_SUCCESS:
      return { ...state, loading: false, agent: action.payload, error: null };

    case actionTypes.CREATE_AGENT_SUCCESS:
      return {
        ...state,
        agents: [...state.agents, action.payload],
        loading: false,
        error: null,
      };

    case actionTypes.CREATE_AGENT_FAILURE:
    case actionTypes.UPDATE_AGENT_FAILURE:
    case actionTypes.DELETE_AGENT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case actionTypes.UPDATE_AGENT_SUCCESS:
      const updatedAgents = state.agents.map((agent) =>
        agent.id === action.payload.id ? action.payload : agent
      );
      return { ...state, loading: false, agents: updatedAgents, error: null };

    case actionTypes.DELETE_AGENT_SUCCESS:
      const remainingAgents = state.agents.filter(
        (agent) => agent.id !== action.payload.id
      );
      return { ...state, loading: false, agents: remainingAgents, error: null };

    default:
      return state;
  }
};

export default agentReducers;
