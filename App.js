import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput.js';
import PlaceList from './src/components/PlaceList/PlaceList.js';
// import placeImage from './src/assets/place.jpg';

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      placeName: '',
      places: [],
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
            uri: "http://japan.com/wp-content/uploads/japan_home_featured_01.jpg"
          },
        })
      }
    })
  };

  placeDeletedHandler = (key) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => place.key !== key )
      }
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <PlaceInput
          placeName={this.state.placeName}
          placeNameChange={this.placeNameChange}
          onPressHandler={this.onPressHandler}
        />
        <PlaceList places={this.state.places}
          onItemDeleted={this.placeDeletedHandler}
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
