import React from 'react';
import { View, Text } from 'react-native';
import { Card, Input, ButtonGroup } from 'react-native-elements';

class UserBodyInfo extends React.Component {
  state = {
    selectedIndex: 0,
  };

  updateIndex = selectedIndex => {
    this.setState({ selectedIndex });
  };

  render() {
    const genderButtons = ['Male', 'Female'];
    const { selectedIndex } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Card title="User Information">
          <Input placeholder="Age" keyboardType="numeric" />
          <Input
            placeholder="Height"
            keyboardType="numeric"
            rightIcon={<Text>kg</Text>}
          />
          <Input
            placeholder="Weight"
            keyboardType="numeric"
            rightIcon={<Text>cm</Text>}
          />
          <Text style={styles.buttonGroupLabelStyle}>Gender</Text>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={genderButtons}
          />
        </Card>
      </View>
    );
  }
}

const styles = {
  buttonGroupLabelStyle: {
    fontSize: 18,
    paddingLeft: 10,
    paddingTop: 10,
  },
};

export default UserBodyInfo;
