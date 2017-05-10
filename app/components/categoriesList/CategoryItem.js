import React, { PropTypes } from 'react';
import { ListItem } from 'react-native-elements';
import styles from '../../styles/CategoriesListItemStyles';

const CategoryItem = ({ name, icon, style, ...props }) => (
  <ListItem
    containerStyle={[styles.rootStyle, style]}
    {...props}
    title={name}
    leftIcon={{
      name: icon,
      type: 'material-community',
    }}
    hideChevron
  />
);

CategoryItem.propTypes = {
  style: PropTypes.any,
  name: PropTypes.string,
  icon: PropTypes.string,
};

export default CategoryItem;
