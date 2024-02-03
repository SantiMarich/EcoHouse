import * as actionTypes from "./ActionTypes";
import axios from "axios";

export const getAgents = () => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.GET_AGENTS_REQUEST });
    try {
      const apiData = await axios.get(`/agents`);
      const agents = apiData.data;
      dispatch({ type: actionTypes.GET_AGENTS_SUCCESS, payload: agents });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_AGENTS_FAILURE,
        payload: error,
      });
    }
  };
};

export const getAgent = (id) => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.GET_AGENT_REQUEST });
    try {
      const apiData = await axios.get(`/agents/${id}`);
      const agent = apiData.data;
      dispatch({ type: actionTypes.GET_AGENT_SUCCESS, payload: agent });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_AGENT_FAILURE,
        payload: error,
      });
    }
  };
};

export const createAgent = (newAgent) => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.CREATE_AGENT_REQUEST });
    try {
      const apiData = await axios.post("/agents", newAgent);
      const createdAgent = apiData.data;
      dispatch({
        type: actionTypes.CREATE_AGENT_SUCCESS,
        payload: createdAgent,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.CREATE_AGENT_FAILURE,
        payload: error,
      });
    }
  };
};

export const updateAgent = (id, updatedAgent) => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.UPDATE_AGENT_REQUEST });
    try {
      await axios.put(`/agents/${id}`, updatedAgent);
      dispatch({
        type: actionTypes.UPDATE_AGENT_SUCCESS,
        payload: { message: "Agent updated successfully" },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_AGENT_FAILURE,
        payload: error,
      });
    }
  };
};

export const deleteAgent = (id) => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.DELETE_AGENT_REQUEST });
    try {
      await axios.delete(`/agents/${id}`);
      dispatch({
        type: actionTypes.DELETE_AGENT_SUCCESS,
        payload: { message: "Agent deleted successfully" },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.DELETE_AGENT_FAILURE,
        payload: error,
      });
    }
  };
};
