import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE, ADD_PLACENAME } from '../actions/actionTypes.js'
// import placeImage from '../../assets/place.jpg'

const initialState = {
  placeName: '',
  places: [],
  selectedPlace: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_PLACE:
        return {
          ...state,
          places: state.places.concat({
            key: Math.random().toString(),
            name: state.placeName,
            image: {
              uri: "https://www.moneysense.ca/wp-content/uploads/2017/01/vacation.jpg"
            }
          })
        };
      case DELETE_PLACE:
        return {
          ...state,
          places: state.places.filter((elem) => elem.key !== state.selectedPlace.key),
          selectedPlace: null,
        };
      case SELECT_PLACE:
        return {
          ...state,
          selectedPlace: state.places.find(place => {
            return place.key === action.placeKey
          })
        }
      case DESELECT_PLACE:
        return {
          ...state,
          selectedPlace: null
        };
      case ADD_PLACENAME:
        return {
          ...state,
          placeName: action.text,
        };
    default:
      return state;
  }
}

export default reducer;
