import React from 'react';
import { Image, Button,TouchableHighlight } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import QuestionListScreen from './QuestionListScreen';
import UserListScreen from './UserListScreen';

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
           left: <TouchableHighlight
                  style={{
                    width: 48,
                    height: 48,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => navigate('DrawerOpen')}>
                    <Image
                      source={require('../icons/ic_arrow_back.png')}
                      style={styles.icon}
                    />
                  </TouchableHighlight>,
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
        icon: require('../icons/ic_people.png')
      })
	},
};

const HomeScreen = DrawerNavigator(DrawerRoutes );

export default HomeScreen;
