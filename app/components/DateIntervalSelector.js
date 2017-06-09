import React, { PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import Selector from './Selector';
import TextItem from './TextItem';
import TextWithIcons from './TextWithIcons';
import { capitalizeFirstLetter } from '../utils/stringHelper';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
  },
});

const intervals = ['day', 'week', 'month', 'year'];

const IntervalTrigger = name => (
  <TextWithIcons
    text={capitalizeFirstLetter(name)}
    textStyle={styles.textStyle}
    rightIcon="menu-down"
    color="white"
  />
);

const DateIntervalSelector = ({ currentInterval, onSelect }) => (
  <Selector
    options={intervals}
    currentOption={currentInterval}
    optionRenderer={TextItem}
    triggerRenderer={IntervalTrigger}
    onSelect={onSelect}
  />
);

DateIntervalSelector.propTypes = {
  currentInterval: PropTypes.string,
  onSelect: PropTypes.func,
};

export default DateIntervalSelector;
