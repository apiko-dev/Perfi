import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../common/Button';
import * as accountListActions from '../../actions/accountsListActions';
import scenes from '../../constants/scenes';

const DeleteAccountButton = ({ actions, id, navigation }) => {
  const deleteAccount = () => {
    actions.deleteAccount(id);
    navigation.navigate(scenes.Accounts);
  };

  if (id) {
    return (<Button
      icon="delete"
      onPress={deleteAccount}
    />);
  }

  return false;
};

const mapStateToProps = ({ account: { id } }) => ({
  id,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(accountListActions, dispatch),
});

DeleteAccountButton.propTypes = {
  navigation: PropTypes.object,
  actions: PropTypes.object,
  id: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccountButton);
