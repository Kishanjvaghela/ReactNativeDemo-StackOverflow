import { StackNavigator } from 'react-navigation';
import AppNavigatorRouter from '../AppNavigatorRouter';

const initialNavState = {
    index: 0,
    routes: [
        { key: 'SplashScreen', routeName: 'Splash' },
    ],
};
const navReducer = (state = initialNavState, action) => {
  const newState = AppNavigatorRouter.router.getStateForAction(action, state);
  return newState || state;
};

export default navReducer;
