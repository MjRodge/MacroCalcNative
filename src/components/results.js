import React from 'react';
import { ScrollView } from 'react-native';
import MacroResults from './macroResults';
import CalorieResults from './calorieResults';

class Results extends React.Component {
  static navigationOptions = {
    title: 'Results',
  };
  render() {
    return (
      <ScrollView style={{ flex: 1, paddingBottom: 15 }}>
        <MacroResults />
        <CalorieResults />
      </ScrollView>
    );
  }
}

export default Results;
