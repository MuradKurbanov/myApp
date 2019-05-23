import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


export default class MapPage extends Component {
  render() {
    return (
      <View style={styles.container}>
         <MapView
           provider={PROVIDER_GOOGLE}
           style={styles.map}
           region={{
             latitude: 37.78825,
             longitude: -122.4324,
             latitudeDelta: 0.015,
             longitudeDelta: 0.0121,
           }}
         >
         </MapView>
         <Text>HI</Text>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   ...StyleSheet.absoluteFillObject,
   height: 800,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
  },
  map: {
   ...StyleSheet.absoluteFillObject,
 },
});
