import React from 'react';
import { Image, Button,TouchableHighlight } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import { PRIMARY_DARK, TEXT_WHITE } from '../colors';
import QuestionListScreen from './QuestionListScreen';
import UserListScreen from './UserListScreen';
import TagListScreen from './TagListScreen';

const styles = {
  icon: {
    width: 24,
    height: 24,
  },
};

const DrawerScreen = ({screenName, title, icon }) => {
  return StackNavigator({  Home1: {
      screen: screenName,

      navigationOptions: {
        title: title,
        drawer: () => ({
          label: title,
          icon: ({ tintColor }) => (
            <Image
              source={icon}
              style={[styles.icon, {tintColor: tintColor}]}
            />
          ),
        }),
        header: ({ navigate }) => ({

           left: (<TouchableHighlight
                    style={{
                      width: 48,
                      height: 48,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => navigate('DrawerOpen')}>
                      <Image
                        source={require('../icons/ic_menu_white.png')}
                        style={styles.icon}
                      />
                 </TouchableHighlight>),
          style: {
              backgroundColor: PRIMARY_DARK,
          },
          tintColor: TEXT_WHITE,
        })
      },
    }});
}

const DrawerRoutes = {
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
};

const HomeScreen = DrawerNavigator(DrawerRoutes );

export default HomeScreen;
