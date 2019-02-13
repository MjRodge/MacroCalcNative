import React from 'react';
import { Button, View, Text } from 'react-native';

class Results extends React.Component {
  static navigationOptions = {
    title: 'Results',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Results Screen</Text>
      </View>
    );
  }
}

export default Results;
