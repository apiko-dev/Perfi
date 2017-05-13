import React, { PropTypes } from 'react';
import { Platform } from 'react-native';
import screens from '../constants/screens';
import {
  DrawerButton,
  RoundButton,
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
        <RoundButton
          iconName="add"
          onPress={onAddButtonClick}
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

export default Accounts;
