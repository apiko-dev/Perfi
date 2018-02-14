import React from 'react';
import PropTypes from 'prop-types';
import TextWithIcons from './TextWithIcons';

const AccountItem = ({ name, icon }) => <TextWithIcons text={name} leftIcon={icon} />;

AccountItem.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
};

export default AccountItem;
