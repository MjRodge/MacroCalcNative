import React from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { BarChart } from 'react-native-svg-charts';

import { ChartLegend } from './common';

class CalorieResults extends React.Component {
  render() {
    const chartColors = ['#99ffff', '#FF5722'];
    const chartLabels = ['Resting Calories', 'Goal Calorie Intake'];
    const calorieData = [this.props.restingCalories, this.props.goalCalories];
    const barData = [
      {
        data: [this.props.restingCalories].map((value) => ({ value })),
        svg: {
            fill: '#99ffff'
        },
      },
      {
        data: [this.props.goalCalories].map((value) => ({ value })),
        svg: {
            fill: '#FF5722'
        }
      }
    ];

    return (
      <View style={{ flex: 1 }}>
        <Card title="Calorie Goals">
          <View style={styles.chartView}>
            <BarChart 
              style={{ height: 225, width: 225 }} 
              data={barData} yMin={500} 
              yAccessor={({ item }) => item.value} 
            />
          </View>
          <View>
            {chartColors.map((color, index) => {
              return (
              <ChartLegend 
                color={color} 
                data={calorieData[index]} 
                text={chartLabels[index]} 
                key={`bar-legend-${index}`} 
              />
              );
            })}
          </View>
        </Card>
      </View>
    );
  }
}

const styles = {
  resultsCard: {
    flex: 1,
    padding: 15,
  },
  chartView: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  }
};

const mapStateToProps = state => {
  const { goalCalories, restingCalories, totalCalories } = state.macro;
  return {
    state,
    goalCalories,
    totalCalories,
    restingCalories,
  };
};

export default connect(
  mapStateToProps,
  {}
)(CalorieResults);
