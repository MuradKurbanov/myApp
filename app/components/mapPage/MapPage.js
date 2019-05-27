import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Button} from '../common/button/Button';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addListMarkers } from '../../reducers/stateMap';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 800,
    width: 380,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'relative',
    height: 800,
    width: 380,
  },
  imgMarker: {
    width: 67,
    height: 100,
    position: 'absolute',
    top: 300,
    right: 170,
  }
});

class MapPage extends React.Component {
  state = {
    addMarker: false
  }
  addCoordinate = null;

  handlerPressAdd = () => this.setState({addMarker: true})

  handlerPressСonfirm = () => {
    this.setState({addMarker: false});
    this.props.addListMarkers(this.addCoordinate);
  }

  updateLocation = (e) => this.state.addMarker ? this.addCoordinate = e : null;

  imgMarker =
    <Image
      style={styles.imgMarker}
      source={require('../../../images/location-marker.png')}
    />

  render() {
    const { stateMap } = this.props;
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
      </View>
    )
  }
}

const mapStateToProps = state => { return { stateMap: state.stateMap.markerList }}

const mapDispatchToProps = dispatch => bindActionCreators({ addListMarkers }, dispatch);

const connectedContainer = connect(mapStateToProps, mapDispatchToProps)(MapPage);

export { connectedContainer as MapPage };
