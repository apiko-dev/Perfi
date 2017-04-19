import React, { PropTypes } from 'react';
import { Text, View, TextInput } from 'react-native';

const AccountEditor = ({ navigation }) => {
  const { account, onSubmit } = navigation.state.params;
  const { icon, date, currency, initialBalance, isValid } = account;

  return (
    <View>

    </View>
  );
};

AccountEditor.propTypes = {
  navigation: PropTypes.object,
};

AccountEditor.navigationOptions = {
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: navigation.state.params.title,
  }),
};

export default AccountEditor;
