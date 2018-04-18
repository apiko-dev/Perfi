import React from 'react';
import PropTypes from 'prop-types';
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
