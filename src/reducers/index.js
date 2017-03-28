import { combineReducers } from 'redux';
import appData from './dataReducer';
import navReducer from './NavigatorReducer';

const rootReducer = combineReducers({
    appData: appData,
    nav: navReducer,
});

export default rootReducer;
