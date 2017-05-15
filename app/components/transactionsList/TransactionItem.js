import React, { PropTypes } from 'react';
import { ListItem } from 'react-native-elements';
import styles from '../../styles/CategoriesListItemStyles';

const CategoryItem = ({ style, ...props }) => {
  console.log({ props });

  return (
    <ListItem
      containerStyle={[styles.rootStyle, style]}
      title={props.value}
      hideChevron
    />
  );
};

CategoryItem.propTypes = {
  style: PropTypes.any,
  // transaction: PropTypes.object,
};

export default CategoryItem;