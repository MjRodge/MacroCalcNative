import React from 'react';
import { Card, CheckBox } from 'react-native-elements';

class Goal extends React.Component {
  state = {
    lose: true,
    maintain: false,
    gain: false,
  };
  render() {
    return (
      <Card title="Weight Goal">
        <CheckBox
          center
          title="Lose"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.lose}
        />
        <CheckBox
          center
          title="Maintain"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.maintain}
        />
        <CheckBox
          center
          title="Gain"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.gain}
        />
      </Card>
    );
  }
}

export default Goal;
