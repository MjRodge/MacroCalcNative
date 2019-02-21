import React from 'react';
import { Text } from 'react-native';
import { Card, Input, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';

import { genderSelection, changedText } from '../actions';

class UserBodyInfo extends React.Component {
  state = {
    selectedIndex: 0,
  };

  updateIndex = selectedIndex => {
    const genderButtons = ['Male', 'Female'];
    this.props.genderSelection(genderButtons[selectedIndex]);
    this.setState({ selectedIndex });
  };

  render() {
    const genderButtons = ['Male', 'Female'];
    const { selectedIndex } = this.state;
    return (
      <Card title="User Information">
        <Input
          placeholder="Age"
          keyboardType="numeric"
          onChangeText={text => {
            this.props.changedText('age', text);
          }}
        />
        <Input
          placeholder="Height"
          keyboardType="numeric"
          rightIcon={<Text>{this.props.heightUnit}</Text>}
          onChangeText={text => {
            this.props.changedText('height', text);
          }}
        />
        <Input
          placeholder="Weight"
          keyboardType="numeric"
          rightIcon={<Text>{this.props.weightUnit}</Text>}
          onChangeText={text => {
            this.props.changedText('weight', text);
          }}
        />
        <Text style={styles.buttonGroupLabelStyle}>Gender</Text>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={genderButtons}
        />
      </Card>
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

const mapStateToProps = state => {
  const { gender, age, height, weight, heightUnit, weightUnit } = state.macro;
  return {
    gender,
    age,
    height,
    weight,
    heightUnit,
    weightUnit,
  };
};

export default connect(
  mapStateToProps,
  { genderSelection, changedText }
)(UserBodyInfo);
