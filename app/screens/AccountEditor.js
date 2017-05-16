import React, { PropTypes } from 'react';
import { Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { SceneContentWrapper, NavButton } from '../components';
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

AccountEditor.navigationOptions = ({ navigation }) => {
  const { state: { params: { title, onDelete, account } } } = navigation;
  const action = () => {
    if (account && account.id) {
      onDelete(account.id);
    }
  };

  return ({
    title,
    ...Platform.select({
      android: {
        headerRight: <NavButton
          iconName="delete"
          iconType="material-community"
          navigation={navigation}
          action={action}
          onDelete={onDelete}
          isVisible={!!account}
          backOnSuccess
        />,
      },
    }),
  });
};

AccountEditor.propTypes = {
  navigation: PropTypes.object,
};

export default AccountEditor;
