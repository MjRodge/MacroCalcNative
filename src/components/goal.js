import React from 'react';
import { Card, CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';

import { checkboxSelection } from '../actions';

import { capitaliseFirstLetter } from '../helpers';

class Goal extends React.Component {
  render() {
    const goalCheckboxes = ['lose', 'maintain', 'gain'];
    return (
      <Card title="Weight Goal">
        {goalCheckboxes.map(title => {
          return (
            <CheckBox
              center
              title={capitaliseFirstLetter(title)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={this.props.goal === title}
              onPress={() => {
                this.props.checkboxSelection('goal', title);
              }}
              key={`goal-${title}`}
            />
          );
        })}
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    goal: state.macro.goal
  };
};

export default connect(
  mapStateToProps,
  { checkboxSelection }
)(Goal);
