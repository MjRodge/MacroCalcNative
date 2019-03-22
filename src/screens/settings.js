import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, CheckBox, Slider } from 'react-native-elements';
import { connect } from 'react-redux';

import { checkboxSelection, sliderValueChanged } from '../actions';

class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings'
  };

  render() {
    const { cardStyle } = styles;
    const weightSettings = [
      { title: 'Kilograms (kg)', unit: 'kg' },
      { title: 'Pounds (lb)', unit: 'lb' }
    ];
    const heightSettings = [
      { title: 'Centimetres (cm)', unit: 'cm' },
      { title: 'Feet/Inches (ft/in)', unit: 'ft/in' }
    ];
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingBottom: 25 }}>
          <Card title="Weight Unit" style={cardStyle}>
            {weightSettings.map(item => {
              return (
                <CheckBox
                  center
                  title={item.title}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  key={`settings-checkbox-${item.unit}`}
                  checked={this.props.weightUnit === item.unit}
                  onPress={() => {
                    this.props.checkboxSelection('weightUnit', item.unit, 'weight');
                  }}
                />
              );
            })}
          </Card>
          <Card title="Height Unit" style={cardStyle}>
            {heightSettings.map(item => {
              return (
                <CheckBox
                  center
                  title={item.title}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  key={`settings-checkbox-${item.unit}`}
                  checked={this.props.heightUnit === item.unit}
                  onPress={() => {
                    this.props.checkboxSelection('heightUnit', item.unit, 'height');
                  }}
                />
              );
            })}
          </Card>
          <Card title="Fat/Carb Split" style={cardStyle}>
            <Slider
              value={this.props.carbPercentage}
              onValueChange={value => this.props.sliderValueChanged(value)}
              maximumValue={100}
              step={1}
              onSlidingComplete={() => {}}
            />
            <Text>Carbohydrate percentage: {this.props.carbPercentage}%</Text>
            <Text>Fat percentage: {this.props.fatPercentage}%</Text>
          </Card>
        </View>
      </ScrollView>
    );
  }
}
const styles = {
  cardStyle: {
    flex: 1
  }
};

const mapStateToProps = state => {
  const { weightUnit, heightUnit, fatPercentage, carbPercentage } = state.macro;
  return {
    weightUnit,
    heightUnit,
    fatPercentage,
    carbPercentage
  };
};

export default connect(
  mapStateToProps,
  { checkboxSelection, sliderValueChanged }
)(Settings);
