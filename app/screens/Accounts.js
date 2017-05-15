import React, { PropTypes } from 'react';
import styles from '../styles/ButtonsStyles';
import screens from '../constants/screens';
import {
  RoundButton,
  SceneContentWrapper,
  AccountsList,
} from '../components';

const { fixedButtonContainer } = styles;

const Accounts = ({ navigation, accounts, deleteAccount, updateAccount, createAccount }) => {
  const onAddButtonClick = () => {
    navigation.navigate(screens.AccountEditor, {
      title: 'Add account',
      onSubmit: createAccount,
    });
  };

  return (
    <SceneContentWrapper>
      <AccountsList
        accounts={accounts.byId}
        navigation={navigation}
        deleteAccount={deleteAccount}
        updateAccount={updateAccount}
      />

      <RoundButton
        style={fixedButtonContainer}
        iconName="add"
        onPress={onAddButtonClick}
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
