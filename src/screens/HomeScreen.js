import React from 'react';
import { Image, Button,TouchableHighlight } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import { PRIMARY_DARK, TEXT_WHITE } from '../values/colors';
import QuestionListScreen from './QuestionListScreen';
import UserListScreen from './UserListScreen';
import TagListScreen from './TagListScreen';
import ImageButton from '../component/common/ImageButton';

const styles = {
  icon: {
    width: 24,
    height: 24,
  },
};

const DrawerItem = ( title, icon ) =>({
    label: title,
    icon: ({ tintColor }) => (
      <Image
        source={icon}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
});

const DrawerScreen = ({screenName, title, icon }) => {
  return StackNavigator({
        Home1: {
          screen: screenName,
        }
  },{
    navigationOptions: {

      title: title,
      drawer: DrawerItem(title,icon),
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
});

export default HomeScreen;
