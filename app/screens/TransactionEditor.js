import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import TransactionForm from '../containers/TransactionFormContainer';
import styles from '../styles/SceneStyles';

const TransactionEditor = ({ navigation }) => (
  <View style={styles.rootStyle}>
    <TransactionForm
      onClose={() => navigation.dispatch(NavigationActions.back())}
      navigation={navigation}
    />
  </View>
);

TransactionEditor.propTypes = {
  navigation: PropTypes.object,
};

TransactionEditor.navigationOptions = {
  title: 'Add Transaction',
};

export default TransactionEditor;
