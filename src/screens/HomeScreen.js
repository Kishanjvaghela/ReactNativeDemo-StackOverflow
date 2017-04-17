import React, { Component } from 'react';
import { Image,View, Button,TouchableHighlight, Text } from 'react-native';
import { DrawerNavigator, StackNavigator, DrawerView } from 'react-navigation';
import { PRIMARY_DARK, TEXT_WHITE } from '../values/colors';
import QuestionListScreen from './QuestionListScreen';
import UserListScreen from './UserListScreen';
import TagListScreen from './TagListScreen';
import ImageButton from '../component/common/ImageButton';

const DrawerItem = (props) => (
  <View style={{
    height:48,
    justifyContent: 'center',
    paddingLeft: 24

  }}>
      <Text style={{
        color: '#FFFFFF',
        fontSize: 20,
      }}> { props.name } </Text>
  </View>
);

const CustomDrawerContentComponent = (props) => (
  <View style={{
      flex:1,
      backgroundColor: "#00BBB1",
    }}>
    <Text> HEADER </Text>
    <DrawerView.Items {...props} />
  </View>
);
const DrawerScreen = ({screenName, title, icon }) => {
  return StackNavigator({
        Home1: {
          screen: screenName,
        }
  },{
    navigationOptions: {
      title: title,
      drawer: {
          label: <DrawerItem name={title} />
      },
      header: ({ navigate }) => ({
        // left: MenuButton(navigate),
        left: (<ImageButton
                  source={require('../icons/ic_menu_white.png')}
                  onPress={() => navigate('DrawerOpen')}
                  />),
        style: {
            backgroundColor: PRIMARY_DARK,
        },
        tintColor: TEXT_WHITE,
      })
    },
  });
}

const HomeScreen = DrawerNavigator({
  	FirstViewStack: {
  		name: 'FirstViewStack',
  		screen: DrawerScreen({
          screenName: UserListScreen,
          title: "Users",
          icon: require('../icons/ic_people.png')
        })
  	},
  	SecondViewStack: {
  		name: 'SecondViewStack',
      screen: DrawerScreen({
          screenName: QuestionListScreen,
          title: "Questions",
          icon: require('../icons/ic_question.png')
        })
  	},
    ThirdViewStack: {
  		name: 'ThirdViewStack',
      screen: DrawerScreen({
          screenName: TagListScreen,
          title: "Tags",
          icon: require('../icons/ic_local_offer.png')
        })
  	},
}, {
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeBackgroundColor: '#00AEA6',
      style: {
        backgroundColor: "#00BBB1",
      },
      labelStyle: {
        color: '#FFFFFF',
        fontSize: 44,
      },
    }
  });

export default HomeScreen;
