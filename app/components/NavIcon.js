import React, { PropTypes } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabIcon = ({ name, color }) => (
  <MaterialCommunityIcons
    name={name}
    size={26}
    style={{ color }}
  />
);

TabIcon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

export default TabIcon;
