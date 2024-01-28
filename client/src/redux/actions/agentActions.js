import * as actionTypes from "./ActionTypes";

export const getAgentsSuccess = (agents) => ({
  type: actionTypes.GET_AGENTS_SUCCESS,
  payload: agents,
});

export const getAgentsFailure = (error) => ({
  type: actionTypes.GET_AGENTS_FAILURE,
  payload: error,
});

export const getAgentSuccess = (agent) => ({
  type: actionTypes.GET_AGENT_SUCCESS,
  payload: agent,
});

export const getAgentFailure = (error) => ({
  type: actionTypes.GET_AGENT_FAILURE,
  payload: error,
});

export const createAgentSuccess = (newAgent) => ({
  type: actionTypes.CREATE_AGENT_SUCCESS,
  payload: newAgent,
});

export const createAgentFailure = (error) => ({
  type: actionTypes.CREATE_AGENT_FAILURE,
  payload: error,
});

export const updateAgentSuccess = (message) => ({
  type: actionTypes.UPDATE_AGENT_SUCCESS,
  payload: message,
});

export const updateAgentFailure = (error) => ({
  type: actionTypes.UPDATE_AGENT_FAILURE,
  payload: error,
});

export const deleteAgentSuccess = (message) => ({
  type: actionTypes.DELETE_AGENT_SUCCESS,
  payload: message,
});

export const deleteAgentFailure = (error) => ({
  type: actionTypes.DELETE_AGENT_FAILURE,
  payload: error,
});
