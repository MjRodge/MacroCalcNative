import { createStackNavigator } from 'react-navigation';

import UserInput from '../screens/userInput';
import Results from '../screens/results';
import Settings from '../screens/settings';

const BodyInfoStackNavigator = createStackNavigator(
  {
    Home: UserInput,
    Results,
    Settings
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#293D5D'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

export default BodyInfoStackNavigator;
