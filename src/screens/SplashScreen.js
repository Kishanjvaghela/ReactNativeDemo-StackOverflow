import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class SplashScreen extends Component {

  componentWillMount() {
      setTimeout(()=> {
        Actions.main();
      },2000);
  }

  render(){
    return(
      <View>
        <Text>
          Splash Screen
        </Text>
      </View>
    );
  }
}
