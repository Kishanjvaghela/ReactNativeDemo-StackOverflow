import React, { Component } from "react";
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import CircleSvg from './common/CircleSvg';
import { convertRaputation } from '../utils/Utils';

export default class ListItem extends Component {
  _onRowClicked() {
    const { navigate } = this.props.navigation;
    navigate('UserDetail');
  }
  render() {
    const { display_name, reputation, badge_counts, profile_image } = this.props.data;


    return (
      <TouchableHighlight
        onPress={this._onRowClicked.bind(this)}>
        <View style= {{
          padding:10,
          flexDirectionpadding:10,
          flexDirection: 'row',
        }}>
          <Image
            style={{
              width:50,
              height:50,
              marginRight: 10
            }}
            source={{uri: profile_image}}
          />
          <View style={{
            flex:1,
          }}>

            <Text style={{
                fontSize: 18,
                color: '#0275CD',
                fontWeight: 'bold'
              }}
              ellipsizeMode='tail'
              numberOfLines= {1} >
                { display_name }
            </Text>

            <View style= {{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <Text style={{
                color:'#858E97',
                fontWeight: 'bold',
                marginRight: 10
              }}>
                { convertRaputation(reputation) }
              </Text>
              <CircleSvg
                color="#F8C501"/>
              <Text style={styles.budgeTextStyle}>
                { badge_counts.bronze }
              </Text>
              <CircleSvg
                color="#C5C5C5"/>
              <Text style={styles.budgeTextStyle}>
                { badge_counts.silver }
              </Text>
              <CircleSvg
                color="#D09962"/>
              <Text style={styles.budgeTextStyle}>
                { badge_counts.gold }
              </Text>
          </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = {
  budgeTextStyle: {
    color: '#69727C',
    marginLeft: 6,
    marginRight: 10
  }
};
