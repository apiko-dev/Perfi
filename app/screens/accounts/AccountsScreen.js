import React, { PropTypes } from 'react';
import screens from '../../constants/screens';
import {
  ActionButton,
  ScreenWrapper,
  NavButton,
} from '../../components';
import AccountsListContainer from './accountsList/AccountsListContainer';

const goToTransfers = navigation => () => {
  navigation.navigate(screens.TransferEditor, {
    title: 'Add transfer',
  });
};

const Accounts = ({ navigation }) => (
  <ScreenWrapper>
    <AccountsListContainer navigation={navigation} />
    <ActionButton
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
