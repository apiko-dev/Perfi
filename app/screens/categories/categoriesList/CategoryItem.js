import React, { PropTypes } from 'react';
import { CustomListItem } from '../../../components';

const CategoryItem = ({ name, icon, ...props }) => (
  <CustomListItem
    {...props}
    title={name}
    icon={icon}
  />
);

CategoryItem.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
};

export default CategoryItem;
