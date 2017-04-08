import React, { PropTypes } from 'react';
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

export default name => props => <NavIcon name={name} {...props} />;
