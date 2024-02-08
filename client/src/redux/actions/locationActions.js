import * as actionTypes from "./ActionTypes";
import axios from "axios";

export const getLocations = () => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.GET_LOCATIONS_REQUEST });
    try {
      const apiData = await axios.get(`/location`);
      const locations = apiData.data;
      dispatch({ type: actionTypes.GET_LOCATIONS_SUCCESS, payload: locations });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_LOCATIONS_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const getLocation = (id) => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.GET_LOCATION_REQUEST });
    try {
      const apiData = await axios.get(`/location/${id}`);
      const location = apiData.data;
      dispatch({ type: actionTypes.GET_LOCATION_SUCCESS, payload: location });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_LOCATION_FAILURE,
        payload: error,
      });
    }
  };
};

export const createLocation = (newLocation) => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.CREATE_LOCATION_REQUEST });
    try {
      const apiData = await axios.post("/location", newLocation);
      const createdLocation = apiData.data;
      dispatch({
        type: actionTypes.CREATE_LOCATION_SUCCESS,
        payload: createdLocation,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.CREATE_LOCATION_FAILURE,
        payload: error,
      });
    }
  };
};

export const updateLocation = (id, updatedLocation) => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.UPDATE_LOCATION_REQUEST });
    try {
      await axios.put(`/location/${id}`, updatedLocation);
      dispatch({
        type: actionTypes.UPDATE_LOCATION_SUCCESS,
        payload: { message: "Location updated successfully" },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_LOCATION_FAILURE,
        payload: error,
      });
    }
  };
};

export const deleteLocation = (id) => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.DELETE_LOCATION_REQUEST });
    try {
      await axios.delete(`/location/${id}`);
      dispatch({
        type: actionTypes.DELETE_LOCATION_SUCCESS,
        payload: { message: "Location deleted successfully" },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.DELETE_LOCATION_FAILURE,
        payload: error,
      });
    }
  };
};
