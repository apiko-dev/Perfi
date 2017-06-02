import React, { PropTypes } from 'react';
import screens from '../../constants/screens';
import {
  ActionButton,
  ScreenWrapper,
  NavButton,
} from '../../components';
import AccountsListContainer from './accountsList/AccountsListContainer';

const onNavigate = (nav, screen, params) => () => nav.navigate(screen, params);

const Accounts = ({ navigation }) => (
  <ScreenWrapper>
    <AccountsListContainer navigation={navigation} />
    <ActionButton
      iconName="add"
      onPress={onNavigate(navigation, screens.AccountEditor, { title: 'Add account' })}
    />
  </ScreenWrapper>
);

Accounts.navigationOptions = ({ navigation }) => ({
  headerRight: (
    <NavButton
      iconName="exchange"
      iconType="font-awesome"
      navigation={navigation}
      action={onNavigate(navigation, screens.TransferEditor, { title: 'Add transfer' })}
    />
  ),
});

Accounts.propTypes = {
  navigation: PropTypes.object,
};

export default Accounts;
