import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const Button = props => {
  const { btnStyle, textStyle, text, onPress } = props;
  let checkStyle, checkStyle2;
  if (btnStyle === 'newMarkerBtn') {
    checkStyle = styles.newMarkerBtn
    checkStyle2 = styles.newMarkerTitle
  } else if (btnStyle === 'confirmLocationBtn') {
    checkStyle = styles.confirmLocationBtn
    checkStyle2 = styles.titleСonfirm
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
    backgroundColor: '#7abfcb',
    padding: 10,
    borderRadius: 100,
    position: 'absolute',
    right: 60,
    bottom: 80
  },
  newMarkerTitle: {
    fontSize: 45,
    color: '#ffffff',
  },
  confirmLocationBtn: {
    width: 200,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7abfcb',
    padding: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 100,
    bottom: 80
  },
  titleСonfirm: {
    fontSize: 22,
    color: '#ffffff',
  },
});
