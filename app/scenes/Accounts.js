import React, { PropTypes } from 'react';
import { Button, Platform, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as accountActions from '../actions/accountActions';
import scenes from '../constants/scenes';
import { DrawerButton } from '../components';
import AccountsList from '../components/accounts/AccountsList';

const Accounts = ({ navigation, accounts }) => (
  <View>
    <AccountsList accounts={accounts} />

    <Text>Accounts</Text>
    <Button
      title="Edit account"
      onPress={() => navigation.navigate(scenes.AccountEditor, {
        title: 'Edit account',
      })}
    />
    <Button
      title="Add account"
      onPress={() => navigation.navigate(scenes.AccountEditor, {
        title: 'Add account',
      })}
    />
  </View>
);

Accounts.propTypes = {
  navigation: PropTypes.object,
  actions: PropTypes.object,
  accounts: PropTypes.array,
};

Accounts.defaultProps = {
  accounts: [],
};

Accounts.navigationOptions = {
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: 'Accounts',
    ...Platform.select({
      android: {
        left: <DrawerButton navigation={navigation} />,
      },
    }),
  }),
};

const mapStateToProps = ({ navigation, accounts }) => ({
  navigation,
  accounts,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(accountActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
