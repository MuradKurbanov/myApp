import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import {MapPage} from './components/mapPage/MapPage';

// import axios from 'axios';
// import axiosMiddleware from 'redux-axios-middleware';
// const client = axios.create({
//   baseURL: 'https://api.github.com',
//   responseType: 'json'
// });
// const store = createStore(reducer,
//   applyMiddleware(
//     axiosMiddleware(client)
//   )
// );

const store = createStore(reducer);

export const App = () => (
  <Provider store={store}>
      <View>
        <MapPage />
      </View>
  </Provider>
)
