import { StackNavigator } from 'react-navigation';
import SplashScreen from './screens/SplashScreen';
import UserDetailScreen from './screens/UserDetailScreen';
import HomeScreen from './screens/HomeScreen';

const AppNavigatorRouter = StackNavigator({
  Splash: {
    screen: SplashScreen,
   },
  UserDetail : {
    screen: UserDetailScreen,
  },
  Home : {
    screen: HomeScreen,
  }
},{
			headerMode: 'none'
});

export default AppNavigatorRouter;
