import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const PlaceInput = ({placeName, placeNameChange, onPressHandler}) => (
  <View style={styles.inputContainer}>
    <TextInput
      placeholder="Input text here..."
      value={placeName}
      style={styles.placeInput}
      onChangeText={placeNameChange}/>
    <Button
      title="button"
      style={styles.placeButton}
      onPress={onPressHandler}
    />
  </View>
);

const styles = StyleSheet.create({
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
  },
  listContainer: {
    width: "100%"
  }
});

export default PlaceInput;
