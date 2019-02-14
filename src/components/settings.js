import React from 'react';
import { Button, View, Text } from 'react-native';
import { Card, CheckBox, Slider } from 'react-native-elements';

class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  state = {
    lbChecked: true,
    kgChecked: false,
    ftChecked: true,
    cmChecked: false,
    value: 80,
  };
  render() {
    const { cardStyle } = styles;
    return (
      <View style={{ flex: 1 }}>
        <Card title="Weight Unit" style={cardStyle}>
          <CheckBox
            center
            title="Pounds (lb)"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.lbChecked}
          />
          <CheckBox
            center
            title="Kilograms (kg)"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.kgChecked}
          />
        </Card>
        <Card title="Height Unit" style={cardStyle}>
          <CheckBox
            center
            title="Feet/Inches (ft/in)"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.ftChecked}
          />
          <CheckBox
            center
            title="Centimetres (cm)"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.cmChecked}
          />
        </Card>
        <Card title="Fat/Carb Split">
          <Slider
            value={this.state.value}
            onValueChange={value => this.setState({ value })}
            maximumValue={100}
            step={1}
            onSlidingComplete={() => {}}
          />
          <Text>Carbohydrate percentage: {this.state.value}%</Text>
        </Card>
      </View>
    );
  }
}
const styles = {
  cardStyle: {
    flex: 1,
  },
};

export default Settings;
