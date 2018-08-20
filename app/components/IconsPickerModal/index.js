import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, Text } from 'react-native';
import Modal from 'react-native-modal';
import s from './styles';
import IconsPickerList from '../iconsList';

const IconsPickerModal = ({
  isVisible, onIconPick, hideModal, icons, selectedIconName,
}) => (
  <TouchableWithoutFeedback onPress={hideModal}z>
    <Modal
      isVisible={isVisible}
      onBackButtonPress={hideModal}
      onBackdropPress={hideModal}
      style={s.modalStyle}
    >
      <Text style={s.title}>Select the icon</Text>
      <IconsPickerList
        style={s.listStyle}
        icons={icons}
        onIconPick={onIconPick}
        selectedIconName={selectedIconName}
        enableEmptySections
      />
    </Modal>
  </TouchableWithoutFeedback>
);

IconsPickerModal.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string),
  isVisible: PropTypes.bool,
  onIconPick: PropTypes.func,
  selectedIconName: PropTypes.string,
  hideModal: PropTypes.func,
};

export default IconsPickerModal;
