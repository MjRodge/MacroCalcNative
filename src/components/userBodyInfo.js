import React from 'react';
import { Text } from 'react-native';
import { Card, Input, ButtonGroup } from 'react-native-elements';
import TextInputMask from 'react-native-text-input-mask';
import { connect } from 'react-redux';

import { genderSelection, changedText } from '../actions';

class UserBodyInfo extends React.Component {
  state = {
    selectedIndex: 0,
    heightError: false,
    ageError: false,
    weightError: false,
    errorText: 'Only whole numbers allowed',
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
          label="Age"
          ref="age"
          keyboardType="number-pad"
          value={this.props.age.toString()}
          errorMessage={this.state.ageError ? this.state.errorText : null}
          onFocus={() => {
            this.refs.age.clear();
            this.setState({ ageError: false });
          }}
          onEndEditing={e => {
            if (!/^\d+$/.test(e.nativeEvent.text)) {
              this.setState({ ageError: true });
            }
          }}
          onChangeText={text => {
            this.props.changedText('age', text);
          }}
        />
        <Input
          label="Height"
          ref="height"
          keyboardType="number-pad"
          value={this.props.height.toString()}
          rightIcon={<Text>{this.props.heightUnit}</Text>}
          errorMessage={this.state.heightError ? this.state.errorText : null}
          onFocus={() => {
            this.refs.height.clear();
            this.setState({ heightError: false });
          }}
          onEndEditing={e => {
            if (!/^\d+$/.test(e.nativeEvent.text)) {
              this.setState({ heightError: true });
            }
          }}
          onChangeText={text => {
            this.props.changedText('height', text);
          }}
        />
        <Input
          label="Weight"
          ref="weight"
          keyboardType="number-pad"
          value={this.props.weight.toString()}
          rightIcon={<Text>{this.props.weightUnit}</Text>}
          errorMessage={this.state.weightError ? this.state.errorText : null}
          onFocus={() => {
            this.refs.weight.clear();
            this.setState({ weightError: false });
          }}
          onEndEditing={e => {
            if (!/^\d+$/.test(e.nativeEvent.text)) {
              this.setState({ weightError: true });
            }
          }}
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
        <TextInputMask
          onChangeText={(formatted, extracted) => {
            console.log(formatted); // +1 (123) 456-78-90
            console.log(extracted); // 1234567890
          }}
          mask={"[0]'[00]"}
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
