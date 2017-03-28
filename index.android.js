import React from 'react';
import {
  AppRegistry
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import App from './src/App';

AppRegistry.registerComponent('StackOverflow', () => App);
