import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE, ADD_PLACENAME } from './actionTypes.js'

export const addPlace = (placeName) => {
  return {
    type: ADD_PLACE,
    placeName: placeName,
  };
};

export const deletePlace = () => {
  return {
    type: DELETE_PLACE,
  };
};

export const selectedPlace = (key) => {
  return {
    type: SELECT_PLACE,
    placeKey: key,
  };
};

export const deselectPlace = () => {
  return {
    type: DESELECT_PLACE,
  };
};

export const addPlaceName = (text) => {
  return {
    type: ADD_PLACENAME,
    text: text,
  };
};
