import { StackNavigator } from 'react-navigation';
import UserDetailScreen from './screens/UserDetailScreen';

const AppNavigatorRouter = StackNavigator({
  Home: {
    screen: UserDetailScreen,
   },
});

export default AppNavigatorRouter;
