import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchData } from './actions/actions';
import UserList from './component/UserList';

class App extends Component {

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

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
};
export default connect(mapStateToProps,{fetchData})(App);
