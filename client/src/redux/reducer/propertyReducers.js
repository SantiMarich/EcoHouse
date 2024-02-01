import * as actionTypes from "../actions/ActionTypes";

const initialState = {
  properties: [],
  property: null,
  error: null,
};

const propertyReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROPERTIES_SUCCESS:
      return { ...state, properties: action.payload, error: null };

    case actionTypes.GET_PROPERTIES_FAILURE:
      return { ...state, properties: [], error: action.payload };

    case actionTypes.GET_PROPERTY_SUCCESS:
      return { ...state, property: action.payload, error: null };

    case actionTypes.GET_PROPERTY_FAILURE:
      return { ...state, property: null, error: action.payload };

    case actionTypes.CREATE_PROPERTY_SUCCESS:
      return {
        ...state,
        propertiess: [...state.properties, action.payload],
        error: null,
      };

    case actionTypes.CREATE_PROPERTY_FAILURE:
      return { ...state, error: action.payload };

    case actionTypes.UPDATE_PROPERTY_SUCCESS:
      const updatedProperties = state.properties.map((property) =>
        property.id === action.payload.id ? action.payload : property
      );
      return { ...state, locations: updatedProperties, error: null };

    case actionTypes.UPDATE_PROPERTY_FAILURE:
      return { ...state, error: action.payload };

    case actionTypes.DELETE_PROPERTY_SUCCESS:
      const remainingProperties = state.properties.filter(
        (property) => property.id !== action.payload.id
      );
      return { ...state, locations: remainingProperties, error: null };

    case actionTypes.DELETE_PROPERTY_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default propertyReducers;
