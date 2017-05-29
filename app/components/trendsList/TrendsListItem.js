import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/TrendsStyles';

const {
  containerStyle,
  labelContainerStyle,
  rootStyle,
  containerBorderBottom,
  textContainerStyle,
} = styles;

const TrendsListItem = ({ label, income = 0, expense = 0, labelStyle }) => (
  <View style={containerStyle}>
    <View style={[labelContainerStyle, rootStyle]}>
      <Text style={labelStyle}>{ label }</Text>
    </View>
    <View style={rootStyle}>
      <View style={[containerBorderBottom, textContainerStyle]}>
        <Text>+{ income }</Text>
      </View>
      <View style={textContainerStyle}>
        <Text>-{ expense }</Text>
      </View>
    </View>
  </View>
);

TrendsListItem.propTypes = {
  labelStyle: PropTypes.any,
  label: PropTypes.string,
  income: PropTypes.number,
  expense: PropTypes.number,
};

export default TrendsListItem;
