import React, { PropTypes } from 'react';
import { ListItem } from 'react-native-elements';

const CategoryItem = ({ name, icon, ...props }) => (
  <ListItem
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
  name: PropTypes.string,
  icon: PropTypes.string,
};

export default CategoryItem;
