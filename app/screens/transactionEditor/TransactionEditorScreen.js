import React from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import R from 'ramda';
import { ScreenWrapper } from '../../components';
import TransactionFormContainer from './transactionForm/TransactionFormContainer';

const getTransaction = R.path(['state', 'params', 'transaction']);

const TransactionEditor = ({ navigation }) => (
  <ScreenWrapper>
    <TransactionFormContainer
      navigation={navigation}
      onClose={() => navigation.dispatch(NavigationActions.back())}
    />
  </ScreenWrapper>
);

TransactionEditor.propTypes = {
  navigation: PropTypes.object,
};

TransactionEditor.navigationOptions = ({ navigation }) => ({
  title: `${getTransaction(navigation) ? 'Edit' : 'Add'} Transaction`,
});

export default TransactionEditor;
