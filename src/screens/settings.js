import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, CheckBox, Slider } from 'react-native-elements';
import { connect } from 'react-redux';

import { checkboxSelection, sliderValueChanged } from '../actions';

class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    const { cardStyle } = styles;
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingBottom: 25 }}>
          <Card title="Weight Unit" style={cardStyle}>
            <CheckBox
              center
              title="Kilograms (kg)"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={this.props.weightUnit === 'kg'}
              onPress={() => {
                this.props.checkboxSelection('weightUnit', 'kg');
              }}
            />
            <CheckBox
              center
              title="Pounds (lb)"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={this.props.weightUnit === 'lb'}
              onPress={() => {
                this.props.checkboxSelection('weightUnit', 'lb');
              }}
            />
          </Card>
          <Card title="Height Unit" style={cardStyle}>
            <CheckBox
              center
              title="Centimetres (cm)"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={this.props.heightUnit === 'cm'}
              onPress={() => {
                this.props.checkboxSelection('heightUnit', 'cm');
              }}
            />
            <CheckBox
              center
              title="Feet/Inches (ft/in)"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={this.props.heightUnit === 'ft/in'}
              onPress={() => {
                this.props.checkboxSelection('heightUnit', 'ft/in');
              }}
            />
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
    flex: 1,
  },
};

const mapStateToProps = state => {
  const { weightUnit, heightUnit, fatPercentage, carbPercentage } = state.macro;
  return {
    weightUnit,
    heightUnit,
    fatPercentage,
    carbPercentage,
  };
};

export default connect(
  mapStateToProps,
  { checkboxSelection, sliderValueChanged }
)(Settings);
