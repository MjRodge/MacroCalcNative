import React from 'react';
import { ScrollView, Text } from 'react-native';

export default class FoodDiaryScreen extends React.Component {
  static navigationOptions = {
    title: 'Food Diary'
  };

  render() {
    return (
      <ScrollView>
        <Text>Ello World</Text>
      </ScrollView>
    );
  }
}
