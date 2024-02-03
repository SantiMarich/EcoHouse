import * as actionTypes from "../actions/ActionTypes";

const initialState = {
  locations: [],
  location: null,
  error: null,
  loading: false,
};

const locationReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LOCATIONS_REQUEST:
    case actionTypes.GET_LOCATION_REQUEST:
    case actionTypes.CREATE_LOCATION_REQUEST:
    case actionTypes.UPDATE_LOCATION_REQUEST:
    case actionTypes.DELETE_LOCATION_REQUEST:
      return { ...state, loading: true, error: null };

    case actionTypes.GET_LOCATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        locations: action.payload,
        error: null,
      };

    case actionTypes.GET_LOCATIONS_FAILURE:
    case actionTypes.GET_LOCATION_FAILURE:
      return { ...state, loading: false, locations: [], error: action.payload };

    case actionTypes.GET_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        location: action.payload,
        error: null,
      };

    case actionTypes.CREATE_LOCATION_SUCCESS:
      return {
        ...state,
        locations: [...state.locations, action.payload],
        loading: false,
        error: null,
      };

    case actionTypes.CREATE_LOCATION_FAILURE:
    case actionTypes.UPDATE_LOCATION_FAILURE:
    case actionTypes.DELETE_LOCATION_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case actionTypes.UPDATE_LOCATION_SUCCESS:
      const updatedLocations = state.locations.map((location) =>
        location.id === action.payload.id ? action.payload : location
      );
      return {
        ...state,
        loading: false,
        locations: updatedLocations,
        error: null,
      };

    case actionTypes.DELETE_LOCATION_SUCCESS:
      const remainingLocations = state.locations.filter(
        (location) => location.id !== action.payload.id
      );
      return {
        ...state,
        loading: false,
        locations: remainingLocations,
        error: null,
      };

    default:
      return state;
  }
};

export default locationReducers;
