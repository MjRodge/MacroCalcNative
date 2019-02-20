import React from 'react';
import { Card, CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';

import { checkboxSelection } from '../actions';

class ActivityInfo extends React.Component {
  render() {
    return (
      <Card title="Activity Level">
        <CheckBox
          center
          title="Sedentary"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.props.activityLevel === 'sedentary'}
          onPress={() => {
            this.props.checkboxSelection('activityLevel', 'sedentary');
          }}
        />
        <CheckBox
          center
          title="Light"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.props.activityLevel === 'light'}
          onPress={() => {
            this.props.checkboxSelection('activityLevel', 'light');
          }}
        />
        <CheckBox
          center
          title="Moderate"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.props.activityLevel === 'moderate'}
          onPress={() => {
            this.props.checkboxSelection('activityLevel', 'moderate');
          }}
        />
        <CheckBox
          center
          title="Heavy"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.props.activityLevel === 'heavy'}
          onPress={() => {
            this.props.checkboxSelection('activityLevel', 'heavy');
          }}
        />
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    activityLevel: state.macro.activityLevel,
  };
};

export default connect(
  mapStateToProps,
  { checkboxSelection }
)(ActivityInfo);
