import React from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { ScreenWrapper } from '../../components';
import TransferFormContainer from './transferForm/TransferFormContainer';

const TransferEditor = ({ navigation }) => (
  <ScreenWrapper>
    <TransferFormContainer
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
