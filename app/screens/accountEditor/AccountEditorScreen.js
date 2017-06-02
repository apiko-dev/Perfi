import React, { PropTypes } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScreenWrapper } from '../../components';
import DeleteAccountButtonContainer from './screenHeader/DeleteAccountButtonContainer';
import AccountFormContainer from './accountForm/AccountFormContainer';

const AccountEditor = ({ navigation }) => (
  <ScreenWrapper>
    <AccountFormContainer
      navigation={navigation}
      onClose={() => navigation.dispatch(NavigationActions.back())}
    />
  </ScreenWrapper>
);

AccountEditor.navigationOptions = ({ navigation }) => ({
  headerRight: <DeleteAccountButtonContainer navigation={navigation} />,
});

AccountEditor.propTypes = {
  navigation: PropTypes.object,
};

export default AccountEditor;
