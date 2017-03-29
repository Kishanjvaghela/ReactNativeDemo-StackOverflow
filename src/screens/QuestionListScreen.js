import React, { Component } from 'react';
import { Button } from 'react-native';

export default class QuestionListScreen extends Component {
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}
