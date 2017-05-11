import React, { PropTypes } from 'react';
import { NavigationActions } from 'react-navigation';
import Button from '../Button';

const DeleteButton = ({ id, navigation, onDelete }) => {
  const onDeleteButtonPress = () => {
    onDelete(id);
    navigation.dispatch(NavigationActions.back());
  };

  if (id) {
    return (
      <Button
        icon="delete"
        onPress={onDeleteButtonPress}
      />
    );
  }

  return false;
};

DeleteButton.propTypes = {
  navigation: PropTypes.object,
  onDelete: PropTypes.func,
  id: PropTypes.string,
};

export default DeleteButton;
