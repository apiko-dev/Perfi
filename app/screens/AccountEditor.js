import React, { PropTypes } from 'react';
import { Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { SceneContentWrapper, DeleteButton } from '../components';
import AccountFrom from '../components/accountForm';

const AccountEditor = ({ navigation }) => (
  <SceneContentWrapper>
    <AccountFrom
      account={navigation.state.params.account}
      onClose={() => navigation.dispatch(NavigationActions.back())}
      submit={navigation.state.params.onSubmit}
    />
  </SceneContentWrapper>
);

AccountEditor.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.title,
  ...Platform.select({
    android: {
      headerRight: <DeleteButton
        navigation={navigation}
        onDelete={navigation.state.params.onDelete}
        id={navigation.state.params.account ? navigation.state.params.account.id : null}
      />,
    },
  }),
});

AccountEditor.propTypes = {
  navigation: PropTypes.object,
};

export default AccountEditor;
