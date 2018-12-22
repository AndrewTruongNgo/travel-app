import React from 'react';
import { View, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem.js';


const PlaceList = ({places}) => {

  const placesOutput = places.map((place) => (
    <ListItem key={place} placeName={place} />
  ));

  return (
    <View style={styles.listContainer}>
      {placesOutput}
    </View>
  )
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
})

export default PlaceList;
