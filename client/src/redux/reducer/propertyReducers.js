import * as actionTypes from "../actions/ActionTypes";

const initialState = {
  properties: [],
  property: null,
  error: null,
  loading: false,
};

const propertyReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROPERTIES_REQUEST:
    case actionTypes.GET_PROPERTY_REQUEST:
    case actionTypes.CREATE_PROPERTY_REQUEST:
    case actionTypes.UPDATE_PROPERTY_REQUEST:
    case actionTypes.DELETE_PROPERTY_REQUEST:
      return { ...state, loading: true, error: null };

    case actionTypes.GET_PROPERTIES_SUCCESS:
      return {
        ...state,
        loading: false,
        properties: action.payload,
        error: null,
      };

    case actionTypes.GET_PROPERTIES_FAILURE:
    case actionTypes.GET_PROPERTY_FAILURE:
      return {
        ...state,
        loading: false,
        properties: [],
        error: action.payload,
      };

    case actionTypes.GET_PROPERTY_SUCCESS:
      return {
        ...state,
        loading: false,
        property: action.payload,
        error: null,
      };

    case actionTypes.CREATE_PROPERTY_SUCCESS:
      return {
        ...state,
        properties: [...state.properties, action.payload],
        loading: false,
        error: null,
      };

    case actionTypes.CREATE_PROPERTY_FAILURE:
    case actionTypes.UPDATE_PROPERTY_FAILURE:
    case actionTypes.DELETE_PROPERTY_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case actionTypes.UPDATE_PROPERTY_SUCCESS:
      const updatedProperties = state.properties.map((property) =>
        property.id === action.payload.id ? action.payload : property
      );
      return {
        ...state,
        loading: false,
        properties: updatedProperties,
        error: null,
      };

    case actionTypes.DELETE_PROPERTY_SUCCESS:
      const remainingProperties = state.properties.filter(
        (property) => property.id !== action.payload.id
      );
      return {
        ...state,
        loading: false,
        properties: remainingProperties,
        error: null,
      };

    default:
      return state;
  }
};

export default propertyReducers;
