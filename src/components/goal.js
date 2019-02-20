import React from 'react';
import { Card, CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';

import { checkboxSelection } from '../actions';

class Goal extends React.Component {
  render() {
    return (
      <Card title="Weight Goal">
        <CheckBox
          center
          title="Lose"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.props.goal === 'lose'}
          onPress={() => {
            this.props.checkboxSelection('goal', 'lose');
          }}
        />
        <CheckBox
          center
          title="Maintain"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.props.goal === 'maintain'}
          onPress={() => {
            this.props.checkboxSelection('goal', 'maintain');
          }}
        />
        <CheckBox
          center
          title="Gain"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.props.goal === 'gain'}
          onPress={() => {
            this.props.checkboxSelection('goal', 'gain');
          }}
        />
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    goal: state.macro.goal,
  };
};

export default connect(
  mapStateToProps,
  { checkboxSelection }
)(Goal);
