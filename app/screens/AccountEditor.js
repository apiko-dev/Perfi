import React, { PropTypes } from 'react';
import { Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';
import SceneContentWrapper from '../components/common/SceneContentWrapper';
import DeleteAccountButton from '../containers/DeleteButtonContainer';
import AccountFrom from '../containers/AccountFormContainer';

const AccountEditor = ({ navigation }) => <SceneContentWrapper>
  <AccountFrom
    account={navigation.state.params.account}
    onClose={() => navigation.dispatch(NavigationActions.back())}
  />
</SceneContentWrapper>;

AccountEditor.navigationOptions = {
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: navigation.state.params.title,
    ...Platform.select({
      android: {
        right: <DeleteAccountButton
          navigation={navigation}
          account={navigation.state.params.account}
        />,
      },
    }),
  }),
};

AccountEditor.propTypes = {
  navigation: PropTypes.object,
};

export default AccountEditor;
