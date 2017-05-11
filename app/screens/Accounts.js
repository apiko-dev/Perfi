import React, { PropTypes } from 'react';
import { Platform } from 'react-native';
import screens from '../constants/screens';
import {
  DrawerButton,
  Button,
  FixedButtonsContainer,
  SceneContentWrapper,
  AccountsList,
} from '../components';

const Accounts = ({ navigation, accounts, deleteAccount }) => {
  const onAddButtonClick = () => {
    navigation.navigate(screens.AccountEditor, {
      title: 'Add account',
    });
  };

  return (
    <SceneContentWrapper>
      <AccountsList
        accounts={accounts.byId}
        navigation={navigation}
        deleteAccount={deleteAccount}
      />

      <FixedButtonsContainer>
        <Button
          icon="add"
          onPress={onAddButtonClick}
          isRaised
          isBig
        />
      </FixedButtonsContainer>
    </SceneContentWrapper>
  );
};

Accounts.propTypes = {
  navigation: PropTypes.object,
  accounts: PropTypes.object,
  deleteAccount: PropTypes.func,
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
