import Svg,{ Circle } from 'react-native-svg';
import React from 'react';
export default class CircleSvg extends React.Component {
  render() {
    return (
      <Svg
          height="10"
          width="10"
          >
          <Circle
              cx="5"
              cy="5"
              r="5"
              fill={this.props.color}
          />
      </Svg>
    );
  }
}
