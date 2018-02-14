import React from 'react';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NavIcon = ({ tintColor, ...props }) => (
  <MaterialCommunityIcons
    size={26}
    style={{ color: tintColor }}
    {...props}
  />
);

NavIcon.propTypes = {
  tintColor: PropTypes.string,
};

export default NavIcon;
