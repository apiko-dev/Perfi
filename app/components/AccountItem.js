import React, { PropTypes } from 'react';
import ItemWithIcon from './ItemWithIcon';

const AccountItem = ({ name, icon }) => <ItemWithIcon title={name} icon={icon} />;

AccountItem.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
};

export default AccountItem;
