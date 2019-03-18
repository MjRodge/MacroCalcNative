import React from 'react';
import { Card, CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';

import { checkboxSelection } from '../actions';

import { capitaliseFirstLetter } from '../helpers';

class ActivityInfo extends React.Component {
  render() {
    const activityCheckboxes = ['sedentary', 'light', 'moderate', 'heavy'];
    return (
      <Card title="Activity Level">
        {activityCheckboxes.map(title => {
          return (
            <CheckBox
              center
              title={capitaliseFirstLetter(title)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={this.props.activityLevel === title}
              onPress={() => {
                this.props.checkboxSelection('activityLevel', title);
              }}
              key={`activityLevel-${title}`}
            />
          );
        })}
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    activityLevel: state.macro.activityLevel
  };
};

export default connect(
  mapStateToProps,
  {
    checkboxSelection
  }
)(ActivityInfo);
