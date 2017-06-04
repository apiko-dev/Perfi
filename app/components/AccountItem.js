import React, { PropTypes } from 'react';
import ItemWithIcon from './ItemWithIcon';

const AccountItem = ({ name, ...props }) => <ItemWithIcon title={name} {...props} />;

AccountItem.propTypes = {
  name: PropTypes.string,
};

export default AccountItem;
