import React from 'react';
import { Button, Platform, Text, View } from 'react-native';
import scenes from '../constants/scenes';
import { DrawerButton } from '../components';

const Accounts = ({ navigation }) => (
  <View>
    <Text>Accounts</Text>
    <Button
      title="Edit account"
      onPress={() => navigation.navigate(scenes.EditAccount)}
    />
    <Button
      title="Add account"
      onPress={() => navigation.navigate(scenes.AddAccount)}
    />
  </View>
);

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
