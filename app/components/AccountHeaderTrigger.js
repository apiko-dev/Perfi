import React, { PropTypes } from 'react';
import TextWithIcons from './TextWithIcons';

const AccountHeaderTrigger = ({ name, icon }) => (
  <TextWithIcons
    containerStyle={{ marginLeft: 10, marginRight: 10 }}
    text={name}
    textStyle={{ fontSize: 16 }}
    leftIcon={icon}
    rightIcon="menu-down"
    color="white"
  />
);


AccountHeaderTrigger.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
};

export default AccountHeaderTrigger;
