import React, { PropTypes } from 'react';
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

const Accounts = ({ navigation, accounts, deleteAccount }) => {
  const { state: { params } } = navigation;

  const goAddAccount = goToEditor(navigation, { title: 'Add account' });
  const goEditAccount = goToEditor(navigation, { onDelete: deleteAccount, title: 'Edit account' });
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
  headerRight: <NavButton
    isVisible
    iconName="exchange"
    iconType="font-awesome"
    navigation={navigation}
    action={goToTransfers(navigation)}
  />,
});

Accounts.propTypes = {
  navigation: PropTypes.object,
  accounts: PropTypes.object,
  deleteAccount: PropTypes.func,
};

export default Accounts;
