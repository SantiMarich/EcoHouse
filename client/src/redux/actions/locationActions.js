import * as actionTypes from "./ActionTypes";

export const getLocationsSuccess = (locations) => ({
  type: actionTypes.GET_LOCATIONS_SUCCESS,
  payload: locations,
});

export const getLocationsFailure = (error) => ({
  type: actionTypes.GET_LOCATIONS_FAILURE,
  payload: error,
});

export const getLocationSuccess = (Location) => ({
  type: actionTypes.GET_LOCATION_SUCCESS,
  payload: Location,
});

export const getLocationFailure = (error) => ({
  type: actionTypes.GET_LOCATION_FAILURE,
  payload: error,
});

export const createLocationSuccess = (newLocation) => ({
  type: actionTypes.CREATE_LOCATION_SUCCESS,
  payload: newLocation,
});

export const createLocationFailure = (error) => ({
  type: actionTypes.CREATE_LOCATION_FAILURE,
  payload: error,
});

export const updateLocationSuccess = (message) => ({
  type: actionTypes.UPDATE_LOCATION_SUCCESS,
  payload: message,
});

export const updateLocationFailure = (error) => ({
  type: actionTypes.UPDATE_LOCATION_FAILURE,
  payload: error,
});

export const deleteLocationSuccess = (message) => ({
  type: actionTypes.DELETE_LOCATION_SUCCESS,
  payload: message,
});

export const deleteLocationFailure = (error) => ({
  type: actionTypes.DELETE_LOCATION_FAILURE,
  payload: error,
});
