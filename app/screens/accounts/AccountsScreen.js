import React, { PropTypes } from 'react';
import styles from '../../styles/ButtonsStyles';
import screens from '../../constants/screens';
import {
  ActionButton,
  ScreenWrapper,
  NavButton,
} from '../../components';
import AccountsListContainer from './accountsList/AccountsListContainer';

const { fixedButtonContainer } = styles;

// const goToEditor = (navigation, props) => (account) => {
//   const accountName = account && account.name;
//
//   navigation.navigate(screens.AccountEditor, accountName ? { ...props, account } : props);
// };

const goToTransfers = navigation => () => {
  navigation.navigate(screens.TransferEditor, {
    title: 'Add transfer',
  });
};


// const goAddAccount = goToEditor(navigation, { title: 'Add account' });
// const goEditAccount = goToEditor(navigation, { onDelete: deleteAccount, title: 'Edit account' });
// const onSelectAccount = (params && params.onSelectAccount) || goEditAccount;


const Accounts = ({ navigation }) => (
  <ScreenWrapper>
    <AccountsListContainer navigation={navigation} />
    <ActionButton
      style={fixedButtonContainer}
      iconName="add"
      onPress={() => navigation.navigate(screens.AccountEditor, { title: 'Add account' })}
    />
  </ScreenWrapper>
);

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
};

export default Accounts;
