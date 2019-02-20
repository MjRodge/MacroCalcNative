import React from 'react';
import { View, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

import UserBodyInfo from './userBodyInfo';
import ActivityInfo from './activityInfo';
import Goal from './goal';

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
      <ScrollView style={{ flex: 1, paddingBottom: 25 }}>
        <View style={{ flex: 1 }}>
          <UserBodyInfo />
          <ActivityInfo />
          <Goal />
        </View>
      </ScrollView>
    );
  }
}

export default UserInput;
