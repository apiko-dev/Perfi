import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  labelStyle: {
    paddingRight: 4,
    textAlign: 'right',
    fontSize: 10,
    color: colors.secondaryText,
  },
  stripeStyle: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
});

const Line = (max, step, labelWidth) => i => (
  <View key={i} style={styles.rootStyle}>
    <Text style={[styles.labelStyle, { width: labelWidth }]}>
      {max - (step * (i + 1))}
    </Text>
    <View style={styles.stripeStyle} />
  </View>
);

export default Line;
