import React, { PropTypes } from 'react';
import { Button, Platform, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as accountActions from '../actions/accountActions';
import scenes from '../constants/scenes';
import { DrawerButton } from '../components';

const Accounts = ({ navigation, actions }) => (
  <View>
    <Text>Accounts</Text>
    <Button
      title="Edit account"
      onPress={() => navigation.navigate(scenes.AccountEditor, {
        onDataChange: () => {},
        title: 'Edit account',
      })}
    />
    <Button
      title="Add account"
      onPress={() => navigation.navigate(scenes.AccountEditor, {
        onDataChange: actions.updateData,
        onSubmit: actions.createAccount,
        title: 'Add account',
      })}
    />
  </View>
);

Accounts.propTypes = {
  navigation: PropTypes.object,
  actions: PropTypes.object,
  account: PropTypes.object,
};

Accounts.navigationOptions = {
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: 'Accounts',
    ...Platform.select({
      android: {
        left: <DrawerButton navigation={navigation}/>,
      },
    }),
  }),
};

const mapStateToProps = ({ accounts, account }) => ({
  accounts,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(accountActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
