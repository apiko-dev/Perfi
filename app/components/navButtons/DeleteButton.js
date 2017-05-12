import React, { PropTypes } from 'react';
import { NavigationActions } from 'react-navigation';
import { Icon } from 'react-native-elements';

const DeleteButton = ({ id, navigation, onDelete }) => {
  const onDeleteButtonPress = () => {
    onDelete(id);
    navigation.dispatch(NavigationActions.back());
  };

  if (id) {
    return (
      <Icon
        name="delete"
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
