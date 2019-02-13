import React from 'react';
import { Button, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class Input extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Macronutrient Calculator',
      headerRight: (
        <Icon
          containerStyle={{ paddingRight: 20 }}
          name="settings"
          type="material"
          color="#fff"
          onPress={() => navigation.navigate('Settings')}
        />
      ),
    };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

export default Input;
