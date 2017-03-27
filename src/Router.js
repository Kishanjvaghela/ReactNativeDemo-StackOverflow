import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SplashScreen from './screens/SplashScreen';
import UserListScreen from './screens/UserListScreen';
import UserDetailScreen from './screens/UserDetailScreen';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>

      <Scene key="launch">
        <Scene
          key="splash"
          component={SplashScreen}
          title="Splash Screen" />
      </Scene>
      <Scene key="main">
        <Scene
          key="user_list"
          component={UserListScreen}
          title="User List"
          initial
        />
        <Scene
          key="user_detail"
          component={UserDetailScreen}
          title="User Detail"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
