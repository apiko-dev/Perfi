import React, { PropTypes } from 'react';
import { ListItem } from 'react-native-elements';
import styles from '../../styles/CategoriesListItemStyles';

const CategoryItem = ({ style, ...props }) => (
  <ListItem
    containerStyle={[styles.rootStyle, style]}
    {...props}
    title={props.value}
    hideChevron
  />
);

CategoryItem.propTypes = {
  style: PropTypes.any,
  // transaction: PropTypes.object,
};

export default CategoryItem;
