import React from 'react';
import { View, ScrollView } from 'react-native';
import { Icon, Button } from 'react-native-elements';

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
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingBottom: 25 }}>
          <UserBodyInfo />
          <ActivityInfo />
          <Goal />
        </View>
        <View
          style={{
            flex: 1,
            paddingBottom: 25,
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <Button title="Calculate Macros" backgroundColor="ff5722" />
        </View>
      </ScrollView>
    );
  }
}

export default UserInput;
