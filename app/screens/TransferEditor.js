import React, { PropTypes } from 'react';
import { NavigationActions } from 'react-navigation';
import { SceneContentWrapper } from '../components';
import TransferForm from '../containers/TransfersFormContainer';

const TransferEditor = ({ navigation }) => (
  <SceneContentWrapper>
    <TransferForm
      navigation={navigation}
      onClose={() => navigation.dispatch(NavigationActions.back())}
    />
  </SceneContentWrapper>
);

TransferEditor.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.title,
});

TransferEditor.propTypes = {
  navigation: PropTypes.object,
};

export default TransferEditor;
