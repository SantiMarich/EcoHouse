import * as actionTypes from "./ActionTypes";

export const getPropertiesSuccess = (properties) => ({
  type: actionTypes.GET_PROPERTIES_SUCCESS,
  payload: properties,
});

export const getPropertiesFailure = (error) => ({
  type: actionTypes.GET_PROPERTIES_FAILURE,
  payload: error,
});

export const getPropertySuccess = (Property) => ({
  type: actionTypes.GET_PROPERTY_SUCCESS,
  payload: Property,
});

export const getPropertyFailure = (error) => ({
  type: actionTypes.GET_PROPERTY_FAILURE,
  payload: error,
});

export const createPropertySuccess = (newProperty) => ({
  type: actionTypes.CREATE_PROPERTY_SUCCESS,
  payload: newProperty,
});

export const createPropertyFailure = (error) => ({
  type: actionTypes.CREATE_PROPERTY_FAILURE,
  payload: error,
});

export const updatePropertySuccess = (message) => ({
  type: actionTypes.UPDATE_PROPERTY_SUCCESS,
  payload: message,
});

export const updatePropertyFailure = (error) => ({
  type: actionTypes.UPDATE_PROPERTY_FAILURE,
  payload: error,
});

export const deletePropertySuccess = (message) => ({
  type: actionTypes.DELETE_PROPERTY_SUCCESS,
  payload: message,
});

export const deletePropertyFailure = (error) => ({
  type: actionTypes.DELETE_PROPERTY_FAILURE,
  payload: error,
});
