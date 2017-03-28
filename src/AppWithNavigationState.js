import React, { Component }from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import UserDetailScreen from './screens/UserDetailScreen';

const AppNavigatorRouter = StackNavigator({
  Home: {
    screen: UserDetailScreen,
   },
});

class AppWithNavigationState extends Component {
  render() {
    return (
      <AppNavigatorRouter navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

function mapStateToProps(state) {
  return {
      nav: state.nav
  };
}

export default connect(mapStateToProps)(AppWithNavigationState);
