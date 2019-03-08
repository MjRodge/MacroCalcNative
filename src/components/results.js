import React from 'react';
import { View, Text } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { PieChart } from 'react-native-svg-charts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class Results extends React.Component {
  static navigationOptions = {
    title: 'Results',
  };
  render() {
    const chartColors = ['#FF6384', '#36A2EB', '#FFCE56'];
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
        {console.log(pieData)}
        <Card title="Macro Split">
          <View style={styles.chartView}>
            <PieChart style={{ height: 225, width: 225 }} data={pieData} />
          </View>
          <View>
            <FontAwesome5 name={'comments'} />
            <Icon name="cheese" type="font-awesome-5" color="#FF6384" />
            <Icon name="drumstick-bite" type="font-awesome-5" color="#36A2EB" />
            <Icon name="bread-slice" type="font-awesome-5" color="#FFCE56" />
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
  },
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
)(Results);
