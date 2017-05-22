import React, { PropTypes } from 'react';
import { Platform } from 'react-native';
import styles from '../styles/ButtonsStyles';
import screens from '../constants/screens';
import {
  RoundButton,
  SceneContentWrapper,
  AccountsList,
  NavButton,
} from '../components';

const { fixedButtonContainer } = styles;

const goToEditor = (navigation, props) => (account) => {
  const accountName = account && account.name;

  navigation.navigate(screens.AccountEditor, accountName ? { ...props, account } : props);
};

const goToTransfers = navigation => () => {
  navigation.navigate(screens.TransferEditor, {
    title: 'Add transfer',
  });
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

Accounts.navigationOptions = ({ navigation }) => ({
  ...Platform.select({
    android: {
      headerRight: <NavButton
        isVisible
        iconName="exchange"
        iconType="font-awesome"
        navigation={navigation}
        action={goToTransfers(navigation)}
      />,
    },
  }),
});

Accounts.propTypes = {
  navigation: PropTypes.object,
  accounts: PropTypes.object,
  deleteAccount: PropTypes.func,
  updateAccount: PropTypes.func,
  createAccount: PropTypes.func,
};

export default Accounts;
