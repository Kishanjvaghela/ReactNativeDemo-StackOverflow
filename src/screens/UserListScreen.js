import React, { Component } from 'react';
import { TouchableHighlight, View, Text, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { Toolbar, ThemeProvider } from 'react-native-material-ui';
import { fetchData } from '../actions/actions';
import UserList from '../component/UserList';
import ImageButton from '../component/common/ImageButton';


class UserListScreen extends Component {

  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
          <ThemeProvider>
                <Toolbar
                 leftElement="menu"
                 centerElement="Users"
                 onLeftElementPress= {()=>{
                   navigate('DrawerOpen');
                 }}
                 searchable={{
                   autoFocus: true,
                   placeholder: 'Search',
                 }}
               />
          </ThemeProvider>
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
    visible: false,
    // right: <View style={{ flex:1 ,flexDirection: 'row'}}>
    //           <ImageButton
    //             source={require('../icons/ic_search_white.png')}
    //             onPress={() => console.log("search")} />
    //           <ImageButton
    //               source={require('../icons/ic_filter_list_white.png')}
    //               onPress={() => console.log("filter")} />
    //         </View>,
  }),
};

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
};
export default connect(mapStateToProps,{fetchData})(UserListScreen);
