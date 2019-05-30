import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { PopUpAddEvent } from './popUpAddEvent/PopUpAddEvent';
import { Button } from '../button/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showPopUpManager } from '../../../reducers/stateCommon';
import { Dimensions } from "react-native";

const width = Dimensions.get('window').width;


class PopUpManager extends React.Component {
  closePopUp = () => this.props.showPopUpManager(false);
  render () {
    const { popUpManager } = this.props;
    return (
      <View style={styles.popUpManadger}>
        <Button
           btnStyle={'closeBtn'}
           textStyle={'textCloseBtn'}
           text={'X'}
           onPress={this.closePopUp}
        />
        { popUpManager === 'addEvent' ? <PopUpAddEvent /> : null }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  popUpManadger: {
    position: 'absolute',
    width: width,
    paddingTop: 60,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

const mapStateToProps = state => { return {
  popUpManager: state.stateCommon.popUpManager
}}

const mapDispatchToProps = dispatch => bindActionCreators({ showPopUpManager }, dispatch);

const connectedContainer = connect(mapStateToProps, mapDispatchToProps)(PopUpManager);

export { connectedContainer as PopUpManager };
