import React, { PropTypes } from 'react';
import TextWithIcons from './TextWithIcons';
import appStyles from '../styles/AppStyles';

const AccountHeaderTrigger = ({ name, icon }) => (
  <TextWithIcons
    text={name}
    textStyle={appStyles.headerTextStyle}
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
