import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Button} from '../common/button/Button';
import {PopUpManager} from '../common/popUpManager/PopUpManager';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addListMarkers } from '../../reducers/stateMap';
import { showPopUpManager } from '../../reducers/stateCommon';
import { Dimensions } from "react-native";

import { LoginManager } from "react-native-fbsdk";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: height,
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'relative',
    height: height,
    width: width,
  },
  imgMarker: {
    width: 85,
    height: 120,
    position: 'absolute',
    top: 300,
    right: 145,
  }
});

class MapPage extends React.Component {
  state = {
    addMarker: false
  }
  addCoordinate = null;

  handlerPressAdd = () => {
    LoginManager.logInWithReadPermissions(["public_profile", "email"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
    // this.setState({addMarker: true})
  }

  handlerPressСonfirm = () => {
    const { showPopUpManager, addListMarkers } = this.props;
    this.setState({addMarker: false});
    addListMarkers(this.addCoordinate);
    showPopUpManager('addEvent');
  }

  updateLocation = (e) => this.state.addMarker ? this.addCoordinate = e : null;

  imgMarker =
    <Image
      style={styles.imgMarker}
      source={require('../../../images/location-marker.png')}
    />

  render() {
    const { stateMap, popUpManager } = this.props;
    const { addMarker } = this.state;
    return (
      <View style={styles.container}>
        <MapView
           provider={PROVIDER_GOOGLE}
           style={styles.map}
           region={stateMap[0]}
           onRegionChange={region => this.updateLocation(region)}
           showsUserLocation
        >
          {!addMarker &&
           stateMap.map((marker, i) => <Marker coordinate={marker} key={i} />)}
        </MapView>
        {addMarker && this.imgMarker}
        {!addMarker ?
          <Button
            btnStyle={'newMarkerBtn'}
            textStyle={'newMarkerTitle'}
            text={'+'}
            onPress={this.handlerPressAdd}
          /> :
          <Button
           btnStyle={'confirmLocationBtn'}
           textStyle={'titleСonfirm'}
           text={'Подтвердить'}
           onPress={this.handlerPressСonfirm}
          />}
          { popUpManager &&
            <PopUpManager />
          }
      </View>
    )
  }
}

const mapStateToProps = state => { return {
  stateMap: state.stateMap.markerList,
  popUpManager: state.stateCommon.popUpManager
}}

const mapDispatchToProps = dispatch => bindActionCreators({ addListMarkers, showPopUpManager }, dispatch);

const connectedContainer = connect(mapStateToProps, mapDispatchToProps)(MapPage);

export { connectedContainer as MapPage };
