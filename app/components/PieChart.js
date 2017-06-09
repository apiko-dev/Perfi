import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';

import { Pie } from 'react-native-pathjs-charts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
});

const PieChartBasic = () => {
  const data = [{
    "name": "Washington",
    "population": 7694980
  }, {
    "name": "Oregon",
    "population": 2584160
  }, {
    "name": "Minnesota",
    "population": 6590667,
  }, {
    "name": "Alaska",
    "population": 7284698
  }, {
    "name": "Washington",
    "population": 2344980
  }, {
    "name": "Oregon",
    "population": 5684160
  }, {
    "name": "Minnesota",
    "population": 7530667,
  }, {
    "name": "Alaska",
    "population": 1294698
  }];

  const options = {
    margin: {
      top: 20,
      left: 20,
      right: 20,
      bottom: 20
    },
    width: 350,
    height: 350,
    color: colors.darkPrimary,
    r: 100,
    R: 150,
    legendPosition: 'topRight',
    animate: {
      type: 'oneByOne',
      duration: 200,
      fillTransition: 3,
    },
    label: {
      fontFamily: 'Arial',
      fontSize: 8,
      fontWeight: true,
      color: colors.textPrimary,
    }
  };

  return (
    <View style={styles.container}>
      <Pie
        data={data}
        options={options}
        accessorKey="population"
        margin={{top: 20, left: 20, right: 20, bottom: 20}}
        color={colors.darkPrimary}
        pallete={
          [
            {'r':25,'g':99,'b':201},
            {'r':24,'g':175,'b':35},
            {'r':190,'g':31,'b':69},
            {'r':100,'g':36,'b':199},
            {'r':214,'g':207,'b':32},
            {'r':198,'g':84,'b':45}
          ]
        }
        r={80}
        R={120}
        legendPosition="topRight"
        label={{
          fontFamily: 'Arial',
          fontSize: 16,
          fontWeight: true,
          color: '#000000'
        }}
      />
    </View>
  );
};

export default PieChartBasic;
