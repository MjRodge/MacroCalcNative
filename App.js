import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Input from './src/components/input';
import Results from './src/components/results';
import Settings from './src/components/settings';

const AppNavigator = createStackNavigator(
  {
    Home: Input,
    Results: Results,
    Settings: Settings,
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
    return <AppContainer />;
  }
}
