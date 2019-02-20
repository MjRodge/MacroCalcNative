import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import UserBodyInfo from './userBodyInfo';

class UserInput extends React.Component {
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
      <View style={{ flex: 1 }}>
        <UserBodyInfo />
      </View>
    );
  }
}

export default UserInput;
