import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const color1 = '#69d1c5';

export const Button = props => {
  const { btnStyle, textStyle, text, onPress } = props;
  let checkStyle, checkStyle2;
  if (btnStyle === 'newMarkerBtn') {
    checkStyle = styles.newMarkerBtn
    checkStyle2 = styles.newMarkerTitle
  } else if (btnStyle === 'confirmLocationBtn') {
    checkStyle = styles.confirmLocationBtn
    checkStyle2 = styles.titleСonfirm
  } else if (btnStyle === 'closeBtn') {
    checkStyle = styles.closeBtn
    checkStyle2 = styles.textCloseBtn
  } else if (btnStyle === 'addEvent') {
    checkStyle = styles.addEvent;
    checkStyle2 = styles.textaAdEvent;
  }
  return (
    <TouchableOpacity
      style={checkStyle}
      onPress={onPress}
      activeOpacity={1}
    >
      <Text style={checkStyle2}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  newMarkerBtn: {
    width: 75,
    height: 75,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color1,
    padding: 10,
    borderRadius: 100,
    position: 'absolute',
    right: 45,
    bottom: 70,
  },
  newMarkerTitle: {
    fontSize: 35,
    color: '#ffffff',
  },
  confirmLocationBtn: {
    width: 200,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color1,
    padding: 10,
    borderRadius: 0,
    position: 'absolute',
    right: 85,
    bottom: 80
  },
  titleСonfirm: {
    fontSize: 20,
    color: '#ffffff',
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCloseBtn: {
    color: color1,
    fontSize: 24,
  },
  addEvent: {
    width: 200,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color1,
    padding: 10,
    marginBottom: 50,
    marginTop: 40,
  },
  textaAdEvent: {
    fontSize: 20,
    color: '#ffffff',
  },
});
