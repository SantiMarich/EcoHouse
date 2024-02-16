import * as actionTypes from "./ActionTypes";
import axios from "axios";

export const getHouses = () => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.GET_HOUSES_REQUEST });
    try {
      const apiData = await axios.get(`/houses`);
      const houses = apiData.data;
      dispatch({ type: actionTypes.GET_HOUSES_SUCCESS, payload: houses });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_HOUSES_FAILURE,
        payload: error,
      });
    }
  };
};

export const getHouse = (id) => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.GET_HOUSE_REQUEST });
    try {
      const apiData = await axios.get(`/houses/${id}`);
      const house = apiData.data;
      dispatch({ type: actionTypes.GET_HOUSE_SUCCESS, payload: house });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_HOUSE_FAILURE,
        payload: error,
      });
    }
  };
};

export const createHouse = (newHouse) => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.CREATE_HOUSE_REQUEST });
    try {
      const apiData = await axios.post("/houses", newHouse);
      const createdHouse = apiData.data;
      dispatch({
        type: actionTypes.CREATE_HOUSE_SUCCESS,
        payload: createdHouse,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.CREATE_HOUSE_FAILURE,
        payload: error,
      });
    }
  };
};

export const updateHouse = (id, updatedHouse) => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.UPDATE_HOUSE_REQUEST });
    try {
      await axios.put(`/houses/${id}`, updatedHouse);
      dispatch({
        type: actionTypes.UPDATE_HOUSE_SUCCESS,
        payload: { message: "House updated successfully" },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_HOUSE_FAILURE,
        payload: error,
      });
    }
  };
};

export const deleteHouse = (id) => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.DELETE_HOUSE_REQUEST });
    try {
      await axios.delete(`/houses/${id}`);
      dispatch({
        type: actionTypes.DELETE_HOUSE_SUCCESS,
        payload: { message: "House deleted successfully" },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.DELETE_HOUSE_FAILURE,
        payload: error,
      });
    }
  };
};

export const filterHouses = (filteredHouses) => {
  return {
    type: actionTypes.FILTER_HOUSES,
    payload: filteredHouses,
  };
};

export const toggleFavoriteHouse = (houseId) => {
  return async function (dispatch, getState) {
    const { favorites } = getState().houses;
    if (favorites && favorites.includes(houseId)) {
      dispatch(removeFavoriteHouse(houseId));
    } else {
      dispatch(addFavoriteHouse(houseId));
    }
  };
};

const addFavoriteHouse = (houseId) => {
  return {
    type: actionTypes.ADD_FAVORITE_HOUSE,
    payload: houseId,
  };
};

const removeFavoriteHouse = (houseId) => {
  return {
    type: actionTypes.REMOVE_FAVORITE_HOUSE,
    payload: houseId,
  };
};
