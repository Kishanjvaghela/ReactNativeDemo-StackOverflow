import React, { Component } from "react";
import { ListView, Text, View } from 'react-native';
import UserItem from './UserItem';

export default class UserList extends Component {
  componentWillMount(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.userItems),
    };
  }
  // constructor(props) {
  //   super(props);
  //   const budge = {
  //     bronze: 10,
  //     silver: 20,
  //     gold:  30
  //   };
  //   const user = {
  //     display_name: "Kishan",
  //     reputation: 1233,
  //     badge_counts: budge,
  //     profile_image: "https://www.gravatar.com/avatar/89927e2f4bde24991649b353a37678b9?s=128&d=identicon&r=PG"
  //   };
  //
  // }

  render(){
    return (
    <ListView
      dataSource={this.state.dataSource}
      renderRow={(item) => <UserItem data={item} />}/>
      // renderItem={({item}) => } />
    );
  }
}
