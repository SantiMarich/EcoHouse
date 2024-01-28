import * as actionTypes from "./ActionTypes";

export const getHousesSuccess = (houses) => ({
  type: actionTypes.GET_HOUSES_SUCCESS,
  payload: houses,
});

export const getHousesFailure = (error) => ({
  type: actionTypes.GET_HOUSES_FAILURE,
  payload: error,
});

export const getHouseSuccess = (house) => ({
  type: actionTypes.GET_HOUSE_SUCCESS,
  payload: house,
});

export const getHouseFailure = (error) => ({
  type: actionTypes.GET_HOUSE_FAILURE,
  payload: error,
});

export const createHouseSuccess = (newHouse) => ({
  type: actionTypes.CREATE_HOUSE_SUCCESS,
  payload: newHouse,
});

export const createHouseFailure = (error) => ({
  type: actionTypes.CREATE_HOUSE_FAILURE,
  payload: error,
});

export const updateHouseSuccess = (message) => ({
  type: actionTypes.UPDATE_HOUSE_SUCCESS,
  payload: message,
});

export const updateHouseFailure = (error) => ({
  type: actionTypes.UPDATE_HOUSE_FAILURE,
  payload: error,
});

export const deleteHouseSuccess = (message) => ({
  type: actionTypes.DELETE_HOUSE_SUCCESS,
  payload: message,
});

export const deleteHouseFailure = (error) => ({
  type: actionTypes.DELETE_HOUSE_FAILURE,
  payload: error,
});
