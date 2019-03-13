import { createStackNavigator } from 'react-navigation';

import UserInput from '../screens/userInput';
import Results from '../screens/results';
import Settings from '../screens/settings';


const MainStackNavigator = createStackNavigator(
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

export default MainStackNavigator;
