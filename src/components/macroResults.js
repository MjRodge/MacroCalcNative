import React from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { PieChart } from 'react-native-svg-charts';

import { ChartLegend } from './common';

class MacroResults extends React.Component {
  render() {
    const chartColors = ['#FF6384', '#36A2EB', '#FFCE56'];
    const chartLabels = ['Fat', 'Protein', 'Carbohydrates'];
    const macroData = [
      this.props.totalFat,
      this.props.totalProtein,
      this.props.totalCarbs,
    ];
    const pieData = macroData.map((value, index) => ({
      value,
      svg: {
        fill: chartColors[index],
        onPress: () => console.log('press', macroData[index]),
      },
      key: `pie-${index}`,
    }));

    return (
      <View style={{ flex: 1 }}>
        <Card title="Macronutrients">
          <View style={styles.chartView}>
            <PieChart style={{ height: 225, width: 225 }} data={pieData} animate />
          </View>
          <View>
            {chartColors.map((color, index) => {
              return (
              <ChartLegend color={color} data={`${macroData[index]}g`} text={chartLabels[index]} key={`pie-legend-${index}`} />
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
  const { totalFat, totalProtein, totalCarbs } = state.macro;
  return {
    state,
    totalFat,
    totalProtein,
    totalCarbs,
  };
};

export default connect(
  mapStateToProps,
  {}
)(MacroResults);
