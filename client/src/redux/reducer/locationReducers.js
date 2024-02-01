import * as actionTypes from "../actions/ActionTypes";

const initialState = {
  locations: [],
  location: null,
  error: null,
};

const locationReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LOCATIONS_SUCCESS:
      return { ...state, locations: action.payload, error: null };

    case actionTypes.GET_LOCATIONS_FAILURE:
      return { ...state, locations: [], error: action.payload };

    case actionTypes.GET_LOCATION_SUCCESS:
      return { ...state, location: action.payload, error: null };

    case actionTypes.GET_LOCATION_FAILURE:
      return { ...state, location: null, error: action.payload };

    case actionTypes.CREATE_LOCATION_SUCCESS:
      return {
        ...state,
        locations: [...state.locations, action.payload],
        error: null,
      };

    case actionTypes.CREATE_LOCATION_FAILURE:
      return { ...state, error: action.payload };

    case actionTypes.UPDATE_LOCATION_SUCCESS:
      const updatedLocations = state.locations.map((location) =>
        location.id === action.payload.id ? action.payload : location
      );
      return { ...state, locations: updatedLocations, error: null };

    case actionTypes.UPDATE_LOCATION_FAILURE:
      return { ...state, error: action.payload };

    case actionTypes.DELETE_LOCATION_SUCCESS:
      const remainingLocations = state.locations.filter(
        (location) => location.id !== action.payload.id
      );
      return { ...state, locations: remainingLocations, error: null };

    case actionTypes.DELETE_LOCATION_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default locationReducers;
