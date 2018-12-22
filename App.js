import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput.js';
import PlaceList from './src/components/PlaceList/PlaceList.js';

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

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName),
        placeName: '',
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
        <PlaceList places={this.state.places} />
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
