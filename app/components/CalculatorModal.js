import React, { PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Calculator from './calculator';

const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});

const CalculatorModal = ({ value, onSubmit, isVisible }) => (
  <Modal
    style={styles.modalStyle}
    isVisible={isVisible}
  >
    <Calculator
      value={value}
      onSubmit={onSubmit}
    />
  </Modal>
);

CalculatorModal.propTypes = {
  value: PropTypes.number,
  onSubmit: PropTypes.func,
  isVisible: PropTypes.bool,
};

export default CalculatorModal;
