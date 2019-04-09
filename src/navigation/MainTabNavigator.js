import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import headerNavOptions from '../constants/headerNavOptions';
import TabBarIcon from '../components/common/TabBarIcon';
import BodyInfoStackNavigator from './BodyInfoStackNavigator';
import FoodSearchScreen from '../screens/foodSearchScreen';
import FoodDiaryScreen from '../screens/foodDiaryScreen';

BodyInfoStackNavigator.navigationOptions = {
  tabBarLabel: 'User Info',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
  tabBarOptions: {
    activeTintColor: '#ff9800',
    labelStyle: {
      fontSize: 12
    },
    style: {
      backgroundColor: '#293D5D'
    }
  }
};

const FoodSearchStackNavigator = createStackNavigator(
  {
    FoodSearch: FoodSearchScreen
  },
  headerNavOptions
);

FoodSearchStackNavigator.navigationOptions = {
  tabBarLabel: 'Food Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
  ),
  tabBarOptions: {
    activeTintColor: '#ff9800',
    labelStyle: {
      fontSize: 12
    },
    style: {
      backgroundColor: '#293D5D'
    }
  }
};

const FoodDiaryStackNavigator = createStackNavigator(
  {
    FoodDiary: FoodDiaryScreen
  },
  headerNavOptions
);

FoodDiaryStackNavigator.navigationOptions = {
  tabBarLabel: 'Food Diary',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'} />
  ),
  tabBarOptions: {
    activeTintColor: '#ff9800',
    labelStyle: {
      fontSize: 12
    },
    style: {
      backgroundColor: '#293D5D'
    }
  }
};

export default createBottomTabNavigator({
  BodyInfoStackNavigator,
  FoodSearchStackNavigator,
  FoodDiaryStackNavigator
});
