import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SplashScreen from './screens/SplashScreen';
import UserListScreen from './screens/UserListScreen';

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
          key="User list"
          component={UserListScreen}
          title="User List"
          initial
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
