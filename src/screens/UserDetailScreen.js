import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Toolbar, ThemeProvider } from 'react-native-material-ui';

export default class UserDetailScreen extends Component {

  render(){
    return(
      <View>
      <ThemeProvider>
            <Toolbar
            leftElement="arrow-back"
            centerElement="User Detail"
            onLeftElementPress= {()=> {
              console.log("on left press");
              this.props.navigation.dispatch(NavigationActions.back());
             }}
           />
      </ThemeProvider>
        <Text>
          UserDetailScreen
        </Text>
      </View>
    );
  }
}
