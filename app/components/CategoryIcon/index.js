import React from 'react';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { dimensions } from '../../styles';


const NavIcon = ({ tintColor, ...props }) => (
  <MaterialCommunityIcons
    size={dimensions.iconSize}
    style={{ color: tintColor }}
    {...props}
  />
);

NavIcon.propTypes = {
  tintColor: PropTypes.string,
};

export default NavIcon;
