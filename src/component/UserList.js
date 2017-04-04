import React, { Component } from "react";
import { ListView, Text, View } from 'react-native';
import UserItem from './UserItem';


export default class UserList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.userItems),
    };

  }

  render() {
    const {navigate} = this.props.navigation;
    if(this.state.dataSource.getRowCount()>0){
      return (
      <ListView
        enableEmptySections
        dataSource={this.state.dataSource}
        renderRow={(item) =>
          <UserItem
              data={item}
              navigation = {this.props.navigation} />
        }/>
        // renderItem={({item}) => } />
      );
    } else {
      return (
        <View style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
          <Text> No data found </Text>
        </View>
      );
    }
  }
}
