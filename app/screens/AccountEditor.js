import React, { PropTypes } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScreenWrapper, NavButton } from '../components';
import AccountForm from '../containers/AccountFormContainer';

const AccountEditor = ({ navigation }) => (
  <ScreenWrapper>
    <AccountForm
      account={navigation.state.params.account}
      onClose={() => navigation.dispatch(NavigationActions.back())}
      submit={navigation.state.params.onSubmit}
    />
  </ScreenWrapper>
);

AccountEditor.navigationOptions = ({ navigation }) => {
  const { state: { params: { title, onDelete, account } } } = navigation;
  const action = () => {
    onDelete(account.id);
  };

  return ({
    title,
    headerRight: <NavButton
      iconName="delete"
      iconType="material-community"
      navigation={navigation}
      action={action}
      isVisible={!!account}
      backOnSuccess
    />,
  });
};

AccountEditor.propTypes = {
  navigation: PropTypes.object,
};

export default AccountEditor;
