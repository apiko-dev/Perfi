import React, { PropTypes } from 'react';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import ItemWithIcon from '../ItemWithIcon';

const AccountItem = ({ name, icon }) => <ItemWithIcon title={name} icon={icon} />;

const AccountOption = (onSelectAccount) => (account) => (
  <MenuOption
    key={account.name}
    onSelect={() => onSelectAccount(account)}
  >
    <AccountItem {...account} />
  </MenuOption>
);

const AccountSelector = ({ accounts, currentAccount, onSelectAccount }) => (
  <Menu>
    <MenuTrigger>
      <AccountItem {...currentAccount} />
    </MenuTrigger>
    <MenuOptions>
      {accounts.map(AccountOption(onSelectAccount))}
    </MenuOptions>
  </Menu>
);

AccountSelector.propTypes = {
  accounts: PropTypes.array,
  currentAccount: PropTypes.object,
  onSelectAccount: PropTypes.func,
};

export default AccountSelector;
