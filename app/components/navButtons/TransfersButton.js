import React, { PropTypes } from 'react';
import { Icon } from 'react-native-elements';
import screens from '../../constants/screens';

const DeleteButton = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate(screens.TransferEditor, {
      title: 'Add transfer',
    });
  };

  return (
    <Icon
      name="exchange"
      onPress={onPress}
      type="font-awesome"
    />
  );
};

DeleteButton.propTypes = {
  navigation: PropTypes.object,
};

export default DeleteButton;
