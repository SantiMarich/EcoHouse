import * as actionTypes from "./ActionTypes";
import axios from "axios";

export const getProperties = () => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.GET_PROPERTIES_REQUEST });
    try {
      const apiData = await axios.get(`/properties`);
      const properties = apiData.data;
      dispatch({
        type: actionTypes.GET_PROPERTIES_SUCCESS,
        payload: properties,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_PROPERTIES_FAILURE,
        payload: error,
      });
    }
  };
};

export const getProperty = (id) => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.GET_PROPERTY_REQUEST });
    try {
      const apiData = await axios.get(`/properties/${id}`);
      const property = apiData.data;
      dispatch({ type: actionTypes.GET_PROPERTY_SUCCESS, payload: property });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_PROPERTY_FAILURE,
        payload: error,
      });
    }
  };
};

export const createProperty = (newProperty) => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.CREATE_PROPERTY_REQUEST });
    try {
      const apiData = await axios.post("/properties", newProperty);
      const createdProperty = apiData.data;
      dispatch({
        type: actionTypes.CREATE_PROPERTY_SUCCESS,
        payload: createdProperty,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.CREATE_PROPERTY_FAILURE,
        payload: error,
      });
    }
  };
};

export const updateProperty = (id, updatedProperty) => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.UPDATE_PROPERTY_REQUEST });
    try {
      await axios.put(`/properties/${id}`, updatedProperty);
      dispatch({
        type: actionTypes.UPDATE_PROPERTY_SUCCESS,
        payload: { message: "Property updated successfully" },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_PROPERTY_FAILURE,
        payload: error,
      });
    }
  };
};

export const deleteProperty = (id) => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.DELETE_PROPERTY_REQUEST });
    try {
      await axios.delete(`/properties/${id}`);
      dispatch({
        type: actionTypes.DELETE_PROPERTY_SUCCESS,
        payload: { message: "Property deleted successfully" },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.DELETE_PROPERTY_FAILURE,
        payload: error,
      });
    }
  };
};
