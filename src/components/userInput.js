import React from 'react';
import { View, ScrollView } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { storeCalculatedMacros } from '../actions';

import UserBodyInfo from './userBodyInfo';
import ActivityInfo from './activityInfo';
import Goal from './goal';

class UserInput extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Macronutrient Calculator',
      //removed settings screen until input mask for ft/in is built
      /*headerRight: (
        <Icon
          containerStyle={{ paddingRight: 20 }}
          name="settings"
          type="material"
          color="#fff"
          onPress={() => navigation.navigate('Settings')}
        />
      ),*/
    };
  };
  state = {
    //hold values at component level for calculations before seding to redux
    restingCalories: 0,
    totalCalories: 0,
    goalCalories: 0,
    totalProtein: 0,
    totalFat: 0,
    totalCarbs: 0,
  };

  calculateMacros = (
    gender,
    age,
    height,
    weight,
    activityLevel,
    goal,
    fatPercentage
  ) => {
    if (gender === 'Male') {
      const restingCalories = Math.floor(
        10 * weight + 6.25 * height - 5 * age + 5
      );
      this.setState({ restingCalories }, () => {
        this.calcTotalCalories(
          restingCalories,
          activityLevel,
          goal,
          weight,
          fatPercentage
        );
      });
    } else {
      const restingCalories = Math.floor(
        10 * weight + 6.25 * height - 5 * age - 161
      );
      this.setState({ restingCalories }, () => {
        this.calcTotalCalories(
          restingCalories,
          activityLevel,
          goal,
          weight,
          fatPercentage
        );
      });
    }
  };

  calcTotalCalories = (
    restingCalories,
    activityLevel,
    goal,
    weight,
    fatPercentage
  ) => {
    if (activityLevel === 'sedentary') {
      const totalCalories = Math.floor(restingCalories * 1.2);
      this.setState({ totalCalories }, () => {
        this.calcGoalCalories(totalCalories, goal, weight, fatPercentage);
      });
    } else if (activityLevel === 'light') {
      const totalCalories = Math.floor(restingCalories * 1.375);
      this.setState({ totalCalories }, () => {
        this.calcGoalCalories(totalCalories, goal, weight, fatPercentage);
      });
    } else if (activityLevel === 'moderate') {
      const totalCalories = Math.floor(restingCalories * 1.55);
      this.setState({ totalCalories }, () => {
        this.calcGoalCalories(totalCalories, goal, weight, fatPercentage);
      });
    } else {
      const totalCalories = Math.floor(restingCalories * 1.725);
      this.setState({ totalCalories }, () => {
        this.calcGoalCalories(totalCalories, goal, weight, fatPercentage);
      });
    }
  };

  calcGoalCalories = (totalCalories, goal, weight, fatPercentage) => {
    if (goal === 'lose') {
      const goalCalories = Math.floor(totalCalories - totalCalories * 0.2);
      this.setState({ goalCalories }, () => {
        this.calcMacroSplit(goalCalories, weight, fatPercentage);
      });
    } else if (goal === 'gain') {
      const goalCalories = Math.floor(totalCalories + totalCalories * 0.2);
      this.setState({ goalCalories }, () => {
        this.calcMacroSplit(goalCalories, weight, fatPercentage);
      });
    } else {
      const goalCalories = totalCalories;
      this.setState({ goalCalories }, () => {
        this.calcMacroSplit(goalCalories, weight, fatPercentage);
      });
    }
  };

  calcMacroSplit = (goalCalories, weight, fatPercentage) => {
    const totalProtein = Math.floor(weight * 2.2 * 0.825);
    const totalFat = Math.floor((goalCalories * (fatPercentage / 100)) / 9);
    const totalCarbs = Math.floor(
      (goalCalories - totalProtein * 4 - totalFat * 9) / 4
    );
    this.setState({ totalCarbs, totalProtein, totalFat }, () => {
      this.props.storeCalculatedMacros(
        this.state.restingCalories,
        this.state.totalCalories,
        this.state.goalCalories,
        this.state.totalProtein,
        this.state.totalFat,
        this.state.totalCarbs
      );
    });
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingBottom: 25 }}>
          <UserBodyInfo />
          <ActivityInfo />
          <Goal />
        </View>
        <View
          style={{
            flex: 1,
            paddingBottom: 25,
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <Button
            title="Calculate Macros"
            backgroundColor="ff5722"
            onPress={() => {
              this.calculateMacros(
                this.props.gender,
                this.props.age,
                this.props.height,
                this.props.weight,
                this.props.activityLevel,
                this.props.goal,
                this.props.fatPercentage
              );
              this.props.navigation.navigate('Results');
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const {
    gender,
    age,
    height,
    weight,
    activityLevel,
    goal,
    fatPercentage,
  } = state.macro;
  return {
    gender,
    age,
    height,
    weight,
    activityLevel,
    goal,
    fatPercentage,
  };
};

export default connect(
  mapStateToProps,
  { storeCalculatedMacros }
)(UserInput);
