import React from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { ScreenWrapper } from '../../components';
import { getParam } from '../../utils/navHelpers';
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
  headerTitle: getParam('account')(navigation) ? 'Edit account' : 'New account',
  headerRight: <DeleteAccountButtonContainer navigation={navigation} />,
});

AccountEditor.propTypes = {
  navigation: PropTypes.object,
};

export default AccountEditor;
