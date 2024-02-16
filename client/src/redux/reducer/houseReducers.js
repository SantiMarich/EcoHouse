import * as actionTypes from "../actions/ActionTypes";

const persistedState = localStorage.getItem("reduxState");
const initialState = persistedState
  ? JSON.parse(persistedState)
  : {
      houses: [],
      house: null,
      favorites: [],
      error: null,
    };

const houseReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOUSES_REQUEST:
    case actionTypes.GET_HOUSE_REQUEST:
    case actionTypes.CREATE_HOUSE_REQUEST:
    case actionTypes.UPDATE_HOUSE_REQUEST:
    case actionTypes.DELETE_HOUSE_REQUEST:
      return { ...state, loading: true, error: null };

    case actionTypes.GET_HOUSES_SUCCESS:
      return { ...state, loading: false, houses: action.payload, error: null };

    case actionTypes.GET_HOUSES_FAILURE:
      return { ...state, loading: false, houses: [], error: action.payload };

    case actionTypes.GET_HOUSE_SUCCESS:
      return { ...state, loading: false, house: action.payload, error: null };

    case actionTypes.GET_HOUSE_FAILURE:
      return { ...state, loading: false, house: null, error: action.payload };

    case actionTypes.CREATE_HOUSE_SUCCESS:
      return {
        ...state,
        houses: [...state.houses, action.payload],
        loading: false,
        error: null,
      };

    case actionTypes.CREATE_HOUSE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case actionTypes.UPDATE_HOUSE_SUCCESS:
      const updatedHouses = state.houses.map((house) =>
        house.id === action.payload.id ? action.payload : house
      );
      return { ...state, loading: false, houses: updatedHouses, error: null };

    case actionTypes.UPDATE_HOUSE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case actionTypes.DELETE_HOUSE_SUCCESS:
      const remainingHouses = state.houses.filter(
        (house) => house.id !== action.payload.id
      );
      return { ...state, loading: false, houses: remainingHouses, error: null };

    case actionTypes.DELETE_HOUSE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case actionTypes.FILTER_HOUSES:
      return { ...state, filteredHouses: action.payload };

    case actionTypes.ADD_FAVORITE_HOUSE:
      const updatedFavorites = [...state.favorites, action.payload];
      localStorage.setItem(
        "reduxState",
        JSON.stringify({ ...state, favorites: updatedFavorites })
      );
      return {
        ...state,
        favorites: updatedFavorites,
      };

    case actionTypes.REMOVE_FAVORITE_HOUSE:
      const filteredFavorites = state.favorites.filter(
        (id) => id !== action.payload
      );
      localStorage.setItem(
        "reduxState",
        JSON.stringify({ ...state, favorites: filteredFavorites })
      );
      return {
        ...state,
        favorites: filteredFavorites,
      };

    default:
      return state;
  }
};

export default houseReducers;
