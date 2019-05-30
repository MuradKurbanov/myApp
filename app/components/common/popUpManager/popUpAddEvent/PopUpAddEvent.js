import React from 'react';
import {StyleSheet, View, TextInput, Text } from 'react-native';
import { Button } from '../../button/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showPopUpManager } from '../../../../reducers/stateCommon';
import { addMarkerData } from '../../../../reducers/stateMap';

/////// Метка
// Адрес
// Описание +
// Фото
// Рейтинг ?

////// Мероприятие
// Название +
// Описание +
// Дата время
// Участники
// Комментарии

const categories = [
  'Спорт', 'Настольные игры и приставки', 'Выставки и музеи', 'кино', 'Вечеринки'
]

class PopUpAddEvent extends React.Component {
  state = {
    latitude: 37.78925,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    nameLocation: 'Название метки',
    descriptionLocation: 'Описание метки',
    nameEvent: 'Название мероприятия',
    descriptionEvent: 'Описание мероприятия',
    dateAndTime: 'Дата и время мероприятия',
    category: 'Веберите категорию',
    showCategory: false,

  }

  addEvent = () => {
    const { addMarkerData, showPopUpManager, stateMap } = this.props;
    showPopUpManager(false);
    addMarkerData(this.state);
  }

  showCategory = (category) => {
    this.setState({
      showCategory: !this.state.showCategory,
      category: category
    })
  };

  componentWillMount = () => {
    const { stateMap } = this.props;
    this.setState({
      latitude: stateMap[stateMap.length - 1].latitude,
      longitude: stateMap[stateMap.length - 1].longitude,
      latitudeDelta: stateMap[stateMap.length - 1].latitudeDelta,
      longitudeDelta: stateMap[stateMap.length - 1].longitudeDelta
    })
  }

  render () {
    const { showCategory, category } = this.state;
    return (
      <View style={styles.popUpAddEvent}>
        <View style={styles.select}>
          {showCategory ? categories.map((category, i) => (
            <Text onPress={() => this.showCategory(category)} key={i}>{category}</Text>
          )) : <Text onPress={this.showCategory}>{category}</Text>}
        </View>
        <TextInput
          style={styles.input}
          onChangeText={nameLocation => this.setState({nameLocation})}
          value={this.state.nameLocation}
        />
        <TextInput
          style={styles.input}
          onChangeText={descriptionLocation => this.setState({descriptionLocation})}
          value={this.state.descriptionLocation}
        />
        <TextInput
          style={styles.input}
          onChangeText={nameEvent => this.setState({nameEvent})}
          value={this.state.nameEvent}
        />
        <TextInput
          style={styles.input}
          onChangeText={descriptionEvent => this.setState({descriptionEvent})}
          value={this.state.descriptionEvent}
        />
        <TextInput
          style={styles.input}
          onChangeText={dateAndTime => this.setState({dateAndTime})}
          value={this.state.dateAndTime}
        />
        <Button
           btnStyle={'addEvent'}
           textStyle={'textaAdEvent'}
           text={'Добавить'}
           onPress={this.addEvent}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  popUpAddEvent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  select: {
    width: 250,
    height: 35,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 35,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#d6d7da',
  }
});

const mapStateToProps = state => { return {
  stateMap: state.stateMap.markerList,
}}

const mapDispatchToProps = dispatch => bindActionCreators({ showPopUpManager, addMarkerData }, dispatch);

const connectedContainer = connect(mapStateToProps, mapDispatchToProps)(PopUpAddEvent);

export { connectedContainer as PopUpAddEvent };
