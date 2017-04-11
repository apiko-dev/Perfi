import React, { PropTypes } from 'react';
import { Button, Platform, Text, View } from 'react-native';
import scenes from '../constants/scenes';
import { DrawerButton } from '../components';

const Accounts = ({ navigation }) => (
  <View>
    <Text>Accounts</Text>
    <Button
      title="Edit account"
      onPress={() => navigation.navigate(scenes.AccountEditor, { title: 'Edit account' })}
    />
    <Button
      title="Add account"
      onPress={() => navigation.navigate(scenes.AccountEditor, { title: 'Add account' })}
    />
  </View>
);

Accounts.propTypes = {
  navigation: PropTypes.object,
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

export default Accounts;
