/* eslint-disable no-useless-escape */
import React from 'react';
import { Text } from 'react-native';
import { Card, Input, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';

import { genderSelection, changedText, userInfoValidation } from '../actions';

class UserBodyInfo extends React.Component {
  state = {
    selectedIndex: 0,
    heightError: false,
    ageError: false,
    weightError: false,
    errorText: 'Please enter your'
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
          maxLength={2}
          errorMessage={this.state.ageError ? `${this.state.errorText} age` : null}
          onFocus={() => {
            this.refs.age.input.clear();
            this.setState({ ageError: false });
            this.props.userInfoValidation(true);
          }}
          onEndEditing={e => {
            if (!/^\d+$/.test(e.nativeEvent.text)) {
              this.setState({ ageError: true });
              this.props.userInfoValidation(false);
            }
          }}
          onChangeText={text => {
            this.props.changedText('age', text);
          }}
        />
        {this.props.heightUnit === 'cm' ? (
          <Input
            label="Height"
            ref="height"
            keyboardType="number-pad"
            value={this.props.height.toString()}
            maxLength={3}
            rightIcon={<Text>{this.props.heightUnit}</Text>}
            errorMessage={this.state.heightError ? `${this.state.errorText} height` : null}
            onFocus={() => {
              this.refs.height.input.clear();
              this.setState({ heightError: false });
              this.props.userInfoValidation(true);
            }}
            onEndEditing={e => {
              if (!/^\d+$/.test(e.nativeEvent.text)) {
                this.setState({ heightError: true });
                this.props.userInfoValidation(false);
              }
            }}
            onChangeText={text => {
              this.props.changedText('height', text);
            }}
          />
        ) : (
          <Input
            label="Height"
            ref="height"
            keyboardType="number-pad"
            value={this.props.height.toString()}
            maxLength={5}
            rightIcon={<Text>{this.props.heightUnit}</Text>}
            errorMessage={this.state.heightError ? `${this.state.errorText} height` : null}
            onFocus={() => {
              this.refs.height.input.clear();
              this.setState({ heightError: false });
              this.props.userInfoValidation(true);
            }}
            onEndEditing={e => {
              if (!/^([4-8]{1})\'([0-9]|[0-1]{2})$/.test(e.nativeEvent.text)) {
                this.setState({ heightError: true });
                this.props.userInfoValidation(false);
              }
            }}
            onChangeText={text => {
              if (text.length === 1) {
                const textMask = `${text}'`;
                this.props.changedText('height', textMask);
              } else {
                this.props.changedText('height', text);
              }
            }}
          />
        )}
        <Input
          label="Weight"
          ref="weight"
          keyboardType="number-pad"
          value={this.props.weight.toString()}
          maxLength={3}
          rightIcon={<Text>{this.props.weightUnit}</Text>}
          errorMessage={this.state.weightError ? `${this.state.errorText} weight` : null}
          onFocus={() => {
            this.refs.weight.input.clear();
            this.setState({ weightError: false });
            this.props.userInfoValidation(true);
          }}
          onEndEditing={e => {
            if (!/^\d+$/.test(e.nativeEvent.text)) {
              this.setState({ weightError: true });
              this.props.userInfoValidation(false);
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
      </Card>
    );
  }
}

const styles = {
  buttonGroupLabelStyle: {
    fontSize: 18,
    paddingLeft: 10,
    paddingTop: 10
  }
};

const mapStateToProps = state => {
  const { gender, age, height, weight, heightUnit, weightUnit, userInfoIsValid } = state.macro;
  return {
    gender,
    age,
    height,
    weight,
    heightUnit,
    weightUnit,
    userInfoIsValid
  };
};

export default connect(
  mapStateToProps,
  { genderSelection, changedText, userInfoValidation }
)(UserBodyInfo);
