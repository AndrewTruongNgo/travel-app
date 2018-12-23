import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput.js';
import PlaceList from './src/components/PlaceList/PlaceList.js';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail.js'
// import placeImage from './src/assets/place.jpg';

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      placeName: '',
      places: [],
      selectedPlace: null,
    }
  }

  placeNameChange = (value) => {
    this.setState({
      placeName: value,
    })
  }

  onPressHandler = () => {
    if(this.state.placeName.trim() === '') {
      alert('String required');
    }
    let placeName = this.state.placeName;
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          name: placeName,
          image: {
            uri: "https://www.moneysense.ca/wp-content/uploads/2017/01/vacation.jpg"
          },
        })
      }
    })
  };

  placeSelectedHandler = (key) => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      }
    })
  }

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((elem) => elem.key !== prevState.selectedPlace.key),
        selectedPlace: null,
      }
    })
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  }

  render() {

    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.state.selectedPlace} onItemDeleted={this.placeDeletedHandler} onModalClosed={this.modalClosedHandler} />
        <PlaceInput
          placeName={this.state.placeName}
          placeNameChange={this.placeNameChange}
          onPressHandler={this.onPressHandler}
        />
        <PlaceList places={this.state.places}
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
