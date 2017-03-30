import React, { Component } from 'react';
import { TouchableHighlight, View, Text, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchData } from '../actions/actions';
import UserList from '../component/UserList';
import ImageButton from '../component/common/ImageButton';

class UserListScreen extends Component {

  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <View>
          {
            this.props.appData.isFetching && <Text>Loading</Text>
          }
          {
            this.props.appData.data.length ? (
               <UserList userItems = {this.props.appData.data}/>
            ) : null
          }
      </View>
    )
  }
}

UserListScreen.navigationOptions = {
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    right: <View style={{ flexDirection: 'row'}}>
              <ImageButton
                source={require('../icons/ic_search_white.png')}
                onPress={() => console.log("search")} />
              <ImageButton
                  source={require('../icons/ic_filter_list_white.png')}
                  onPress={() => console.log("filter")} />
            </View>,
  }),
};

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
};
export default connect(mapStateToProps,{fetchData})(UserListScreen);
