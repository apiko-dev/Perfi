import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';
import moment from 'moment';
import styles from './TransactionItemStyles';

const CategoryItem = ({ style, value, date, ...props }) => (
  <ListItem
    containerStyle={[styles.rootStyle, style]}
    {...props}
    title={moment(date).format('dd, L')}
    rightTitle={value && value.toString()}
    rightTitleStyle={styles.rightTitleStyle}
    hideChevron
  />
);

CategoryItem.propTypes = {
  style: PropTypes.any,
  value: PropTypes.number,
  date: PropTypes.object,
};

export default CategoryItem;
