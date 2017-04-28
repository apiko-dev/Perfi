import React, { PropTypes } from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../components/common/Button';
import scenes from '../constants/scenes';
import { DrawerButton } from '../components';
import AccountsList from '../components/accounts/AccountsList';
import FixedButtonsContainer from '../components/common/FixedButtonsContainer';
import SceneContentWrapper from '../components/common/SceneContentWrapper';
import * as accountActions from '../actions/accountActions';

const Accounts = ({ navigation, accounts, actions }) => {
  const onAddButtonClick = () => {
    actions.clearForm();
    navigation.navigate(scenes.AccountEditor, {
      title: 'Add account',
    });
  };
  return (
    <SceneContentWrapper>
      <AccountsList
        accounts={accounts}
        navigation={navigation}
        updateAccount={actions.updateData}
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
  accounts: PropTypes.array,
  actions: PropTypes.object,
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

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(accountActions, dispatch),
});

const mapStateToProps = ({ accounts }) => ({
  accounts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
