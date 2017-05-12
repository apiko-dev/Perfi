import React, { PropTypes } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';
import styles from '../styles/IconsPickerStyles';
import IconsPickerList from './iconsList/index';

const { modalStyle, listStyle } = styles;

const IconsPickerModal = ({ isVisible, onIconPick, hideModal, selectedIconName }) => (
  <TouchableWithoutFeedback onPress={hideModal}>
    <Modal isVisible={isVisible} onBackButtonPress={hideModal} style={modalStyle}>
      <IconsPickerList
        style={listStyle}
        onIconPick={onIconPick}
        selectedIconName={selectedIconName}
        enableEmptySections
      />
    </Modal>
  </TouchableWithoutFeedback>
);

IconsPickerModal.propTypes = {
  isVisible: PropTypes.bool,
  onIconPick: PropTypes.func,
  selectedIconName: PropTypes.string,
  hideModal: PropTypes.func,
};

export default IconsPickerModal;
