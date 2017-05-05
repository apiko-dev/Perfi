import React, { PropTypes } from 'react';
import { Platform } from 'react-native';
import Button from '../components/common/Button';
import screens from '../constants/screens';
import { DrawerButton } from '../components';
import AccountsList from '../components/accountsList/AccountsList';
import FixedButtonsContainer from '../components/common/FixedButtonsContainer';
import SceneContentWrapper from '../components/common/SceneContentWrapper';

const Accounts = ({ navigation, accounts, updateAccount }) => {
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
        updateAccount={updateAccount}
      />

      <FixedButtonsContainer>
        <Button
          icon="add"
          onPress={onAddButtonClick}
          raised
          big
        />
      </FixedButtonsContainer>
    </SceneContentWrapper>
  );
};

Accounts.propTypes = {
  navigation: PropTypes.object,
  accounts: PropTypes.object,
  updateAccount: PropTypes.func,
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
