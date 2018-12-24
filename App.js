import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput.js';
import PlaceList from './src/components/PlaceList/PlaceList.js';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail.js'
import { addPlace, deletePlace, selectedPlace, deselectPlace, addPlaceName } from './src/store/actions/index.js';
// import placeImage from './src/assets/place.jpg';

class App extends Component<Props> {
  placeNameChange = (text) => {
    this.props.onAddPlaceName(text);
  }

  onPressHandler = (placeName) => {
    this.props.onAddPlace(placeName);
  };

  placeSelectedHandler = (key) => {
    this.props.onSelectPlace(key);
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }

  render() {

    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.props.selectedPlace} onItemDeleted={this.placeDeletedHandler} onModalClosed={this.modalClosedHandler} />
        <PlaceInput
          placeName={this.props.placeName}
          placeNameChange={this.placeNameChange}
          onPressHandler={this.onPressHandler}
        />
      <PlaceList places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

const mapStateToProps = state => {
  return {
    placeName: state.places.placeName,
    places: state.places.places,
    selectedPlace: state.places.selectedPlace,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectedPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()),
    onAddPlaceName: (text) => dispatch(addPlaceName(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
