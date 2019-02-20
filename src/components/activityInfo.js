import React from 'react';
import { Card, CheckBox } from 'react-native-elements';

class UserBodyInfo extends React.Component {
  state = {
    sedentary: true,
    light: false,
    moderate: false,
    heavy: false,
  };
  render() {
    return (
      <Card title="Activity Level">
        <CheckBox
          center
          title="Sedentary"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.sedentary}
        />
        <CheckBox
          center
          title="Light"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.light}
        />
        <CheckBox
          center
          title="Moderate"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.moderate}
        />
        <CheckBox
          center
          title="Heavy"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.heavy}
        />
      </Card>
    );
  }
}

export default UserBodyInfo;
