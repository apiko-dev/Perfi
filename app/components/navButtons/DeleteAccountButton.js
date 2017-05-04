import React, { PropTypes } from 'react';
import { NavigationActions } from 'react-navigation';
import Button from '../common/Button';

const DeleteAccountButton = ({ account: { id } = {}, navigation, deleteAccount }) => {
  const onDeleteAccount = () => {
    deleteAccount(id);
    navigation.dispatch(NavigationActions.back());
  };

  if (id) {
    return (<Button
      icon="delete"
      onPress={onDeleteAccount}
    />);
  }

  return false;
};

DeleteAccountButton.propTypes = {
  navigation: PropTypes.object,
  deleteAccount: PropTypes.func,
  account: PropTypes.object,
};

export default DeleteAccountButton;
