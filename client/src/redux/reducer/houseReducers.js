// houseReducers.js
import * as actionTypes from "./ActionTypes";

const initialState = {
  houses: [],
  house: null,
  error: null,
};

const houseReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOUSES_SUCCESS:
      return { ...state, houses: action.payload, error: null };

    case actionTypes.GET_HOUSES_FAILURE:
      return { ...state, houses: [], error: action.payload };

    case actionTypes.GET_HOUSE_SUCCESS:
      return { ...state, house: action.payload, error: null };

    case actionTypes.GET_HOUSE_FAILURE:
      return { ...state, house: null, error: action.payload };

    case actionTypes.CREATE_HOUSE_SUCCESS:
      return {
        ...state,
        houses: [...state.houses, action.payload],
        error: null,
      };

    case actionTypes.CREATE_HOUSE_FAILURE:
      return { ...state, error: action.payload };

    case actionTypes.UPDATE_HOUSE_SUCCESS:
      const updatedHouses = state.houses.map((house) =>
        house.id === action.payload.id ? action.payload : house
      );
      return { ...state, houses: updatedHouses, error: null };

    case actionTypes.UPDATE_HOUSE_FAILURE:
      return { ...state, error: action.payload };

    case actionTypes.DELETE_HOUSE_SUCCESS:
      const remainingHouses = state.houses.filter(
        (house) => house.id !== action.payload.id
      );
      return { ...state, houses: remainingHouses, error: null };

    case actionTypes.DELETE_HOUSE_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default houseReducers;
