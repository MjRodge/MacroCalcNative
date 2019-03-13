import React from 'react';
import { ScrollView } from 'react-native';
import MacroResults from '../components/macroResults';
import CalorieResults from '../components/calorieResults';

class Results extends React.Component {
  static navigationOptions = {
    title: 'Results',
  };
  render() {
    return (
      <ScrollView style={{ flex: 1, marginBottom: 15 }}>
        <MacroResults />
        <CalorieResults />
      </ScrollView>
    );
  }
}

export default Results;
