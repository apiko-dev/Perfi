import React, { PropTypes } from 'react';
import styles from '../styles/ButtonsStyles';
import screens from '../constants/screens';
import {
  RoundButton,
  SceneContentWrapper,
  AccountsList,
} from '../components';

const { fixedButtonContainer } = styles;

const goToEditor = (navigation, props) => (account) => {
  const accountName = account && account.name;

  navigation.navigate(screens.AccountEditor, accountName ? { ...props, account } : props);
};

const Accounts = ({ navigation, accounts, deleteAccount, updateAccount, createAccount }) => {
  const { state: { params } } = navigation;

  const goAddAccount = goToEditor(navigation, {
    title: 'Add account',
    onSubmit: createAccount,
  });

  const goEditAccount = goToEditor(navigation, {
    onDelete: deleteAccount,
    onSubmit: updateAccount,
    title: 'Edit account',
  });

  const onSelectAccount = (params && params.onSelectAccount) || goEditAccount;

  return (
    <SceneContentWrapper>
      <AccountsList
        accounts={accounts.byId}
        navigation={navigation}
        onSelectAccount={onSelectAccount}
      />

      <RoundButton
        style={fixedButtonContainer}
        iconName="add"
        onPress={goAddAccount}
      />
    </SceneContentWrapper>
  );
};

Accounts.propTypes = {
  navigation: PropTypes.object,
  accounts: PropTypes.object,
  deleteAccount: PropTypes.func,
  updateAccount: PropTypes.func,
  createAccount: PropTypes.func,
};

export default Accounts;
