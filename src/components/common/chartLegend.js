import React from 'react';
import { View, Text } from 'react-native';

const ChartLegend = ({ color, text, data }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <View
        style={{
          height: 10,
          width: 10,
          backgroundColor: color,
          padding: 4,
          margin: 5
        }}
      />
      <Text>
        {data} {text}
      </Text>
    </View>
  );
};

export { ChartLegend };
