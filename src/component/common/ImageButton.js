import React, { Component } from 'react';
import { TouchableHighlight, Image } from 'react-native';

export default class ImageButton extends Component {

  render() {
    const { onPress, source, style } = this.props;
    return (
      <TouchableHighlight
               style={[{
                 width: 48,
                 height: 48,
                 justifyContent: 'center',
                 alignItems: 'center',
               },style]}
               onPress={onPress}>
                 <Image
                   source={ source }
                   style={{
                     width: 24,
                     height: 24
                   }}
                 />
      </TouchableHighlight>
    );
  }
}
