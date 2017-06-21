import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 10,
    color: colors.secondaryText,
  },
});

const Label = i => (
  <Text key={i} style={styles.rootStyle}>
    {i}
  </Text>
);

export default Label;
