import React, { Component } from "react";
import { View, Text, Image } from 'react-native';
import CircleSvg from './common/CircleSvg';

export default class ListItem extends Component {

  render() {
    const { display_name, reputation, badge_counts, profile_image } = this.props.data;

    return (
        <View style= {{
          flex:1,
          padding:10,
          marginTop:48,
          flexDirection: 'row'
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
                { this.convertRaputation(reputation) }
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
    );
  }

  convertRaputation(reputation) {
    if(reputation<1000){
      return reputation;
    } else if (reputation < 10000) {
      return reputation.chatAt(0) + "," + reputation.substr(1);
    }else {
      return (Math.round((reputation / 1000) * 10) / 10) + "k";
    }
  }
}

const styles = {
  budgeTextStyle: {
    color: '#69727C',
    marginLeft: 6,
    marginRight: 10
  }
};
