import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './src/reducers';
import UserInput from './src/components/userInput';
import Results from './src/components/results';
import Settings from './src/components/settings';

const AppNavigator = createStackNavigator(
  {
    Home: UserInput,
    Results,
    Settings,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#00BCD4',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    const reduxStore = createStore(reducers, applyMiddleware());
    return (
      <Provider store={reduxStore}>
        <AppContainer />
      </Provider>
    );
  }
}
