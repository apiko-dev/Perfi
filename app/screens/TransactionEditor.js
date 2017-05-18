import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import R from 'ramda';
import { TransactionFormContainer } from '../containers';
import styles from '../styles/SceneStyles';

const getTransaction = R.path(['state', 'params', 'transaction']);

const TransactionEditor = ({ navigation }) => (
  <View style={styles.rootStyle}>
    <TransactionFormContainer
      transaction={getTransaction(navigation)}
      navigation={navigation}
      onClose={() => navigation.dispatch(NavigationActions.back())}
    />
  </View>
);

TransactionEditor.propTypes = {
  navigation: PropTypes.object,
};

TransactionEditor.navigationOptions = ({ navigation }) => ({
  title: `${getTransaction(navigation) ? 'Edit' : 'Add'} Transaction`,
});

export default TransactionEditor;
