import React from 'react';
import { ScrollView, Text } from 'react-native';

export default class FoodSearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Food Search'
  };

  render() {
    return (
      <ScrollView>
        <Text>Ello World</Text>
      </ScrollView>
    );
  }
}
