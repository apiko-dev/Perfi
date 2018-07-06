import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const DrawerIcon = ({ tintColor, ...props }) => (
  <Icon
    width={22}
    height={22}
    color={tintColor}
    {...props}
  />
);

DrawerIcon.propTypes = {
  tintColor: PropTypes.string,
};

export default DrawerIcon;
