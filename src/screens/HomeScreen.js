import React from 'react';
import { Image, Button,TouchableHighlight } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Home',
      icon: ({ tintColor }) => (
        <Image
          source={require('../icons/ic_people.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }),
    title: 'Welcome'
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

const headerConfig = {
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
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </TouchableHighlight>,
  })
};

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Notifications',
      icon: ({ tintColor }) => (
        <Image
          source={require('../icons/ic_people.png')}
          style={[styles.tabIcon, {tintColor: tintColor}]}
        />
      ),
    }),
  }
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = {
  icon: {
    width: 24,
    height: 24,
  },
};

const DrawerRoutes = {
	FirstViewStack: {
		name: 'FirstViewStack',
		screen: StackNavigator({  Home1: {
        screen: MyHomeScreen,
        navigationOptions: headerConfig,
      }})
	},
	SecondViewStack: {
		name: 'SecondViewStack',
    screen: StackNavigator({  Home1: {
        screen: MyNotificationsScreen,
        navigationOptions: headerConfig,
      }})
	},
};

const HomeScreen = DrawerNavigator(DrawerRoutes );

export default HomeScreen;
