/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
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
         <Text>Hello world</Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
  },
  map: {
   ...StyleSheet.absoluteFillObject,
 },
});
