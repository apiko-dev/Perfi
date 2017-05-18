import React, { PropTypes } from 'react';
import { ListItem } from 'react-native-elements';
import moment from 'moment';
import styles from '../../styles/CategoriesListItemStyles';

const CategoryItem = ({ style, value, date, ...props }) => (
  <ListItem
    containerStyle={[styles.rootStyle, style]}
    {...props}
    title={moment(date).format('dd, L')}
    rightTitle={value && value.toString()}
    hideChevron
  />
);

CategoryItem.propTypes = {
  style: PropTypes.any,
  value: PropTypes.number,
  date: PropTypes.object,
};

export default CategoryItem;
