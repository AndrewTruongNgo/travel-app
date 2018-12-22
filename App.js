/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

import ListItem from './src/components/ListItem/ListItem.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
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

    const placesOutput = this.state.places.map((place) => (
      <ListItem key={place} placeName={place} />
    ))

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Input text here..."
            value={this.state.placeName}
            style={styles.placeInput}
            onChangeText={this.placeNameChange}/>
          <Button
            title="button"
            style={styles.placeButton}
            onPress={this.onPressHandler}
            />
        </View>
        <View>
          {placesOutput}
        </View>
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
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});
