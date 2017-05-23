import React, { PropTypes } from 'react';
import R from 'ramda';
import { SelectBox } from './';

const getLabel = ({ name }) => name;
const getIcon = ({ icon }) => icon;

const AccountsSelectBox = ({ accounts, selectedAccount = {}, onSelect, ...props }) => (<SelectBox
  items={R.values(accounts.byId)}
  selectedValue={selectedAccount}
  onValueChange={onSelect}
  getIcon={getIcon}
  getLabel={getLabel}
  {...props}
/>);

AccountsSelectBox.propTypes = {
  accounts: PropTypes.object,
  selectedAccount: PropTypes.object,
  onSelect: PropTypes.func,
};

export default AccountsSelectBox;
