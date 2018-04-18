import React from 'react';
import PropTypes from 'prop-types';
import { Button, Image, Platform, StyleSheet, Text, View } from 'react-native';
import screens from '../../constants/screens';
import { Card, DrawerButton, SecondaryText } from '../../components';
import appStyles from '../../styles/AppStyles';

const logo = require('../../images/jss-logo.png');

const styles = StyleSheet.create({
  logoStyle: {
    width: 32,
    height: 32,
    marginLeft: 8,
    marginRight: 8,
  },
});

const Settings = ({ navigation }) => (
  <View>
    <Card wrapperStyle={appStyles.rowStyle}>
      <SecondaryText>Made by</SecondaryText>
      <Image
        style={styles.logoStyle}
        source={logo}
      />
      <SecondaryText>JSSolutions with love</SecondaryText>
    </Card>

    { Platform.select({
      ios: (
        <View>
          <Button
            title="Accounts"
            onPress={() => navigation.navigate(screens.Accounts)}
          />
          <Button
            title="Categories"
            onPress={() => navigation.navigate(screens.Categories)}
          />
        </View>
      ) }) }
  </View>
);

Settings.propTypes = {
  navigation: PropTypes.object,
};

Settings.navigationOptions = ({ navigation }) => ({
  title: 'Settings',
  ...Platform.select({
    android: {
      headerLeft: <DrawerButton navigation={navigation} />,
    },
  }),
});

export default Settings;
