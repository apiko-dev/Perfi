import React, { PropTypes } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScreenWrapper } from '../components';
import TransferForm from '../containers/TransfersFormContainer';

const TransferEditor = ({ navigation }) => (
  <ScreenWrapper>
    <TransferForm
      navigation={navigation}
      onClose={() => navigation.dispatch(NavigationActions.back())}
    />
  </ScreenWrapper>
);

TransferEditor.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.title,
});

TransferEditor.propTypes = {
  navigation: PropTypes.object,
};

export default TransferEditor;
