import R from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Modal from 'react-native-modal';
// import Button from '../Button';
import Text from '../Text';
// import VerticalSeparator from '../VerticalSeparator';
import styles from '../../styles';
import s from './styles';

const Dialog = (props) => {
  const {
    cancelButtonProps,
    cancelTitle = 'CANCEL',
    cancelTitleStyle,
    isVisible,
    message,
    onCancel,
    onSubmit,
    submitButtonProps,
    submitTitle = 'OK',
    submitTitleStyle,
  } = props;

  return (
    <Modal
      style={s.modal}
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={isVisible}
    >
      <View style={s.container}>
        <View>
          <Text style={s.text}>{message}</Text>
        </View>
        {R.all(R.is(Function), [onCancel, onSubmit]) ? (
          <View style={styles.rowAligned}>
            <View style={styles.fillAll}>
              <Button
                onPress={onCancel}
                title={cancelTitle}
                titleStyle={[s.cancelTitle, cancelTitleStyle]}
                {...cancelButtonProps}
              />
            </View>
            {/*<VerticalSeparator />*/}
            <View style={styles.fillAll}>
              <Button
                onPress={onSubmit}
                title={submitTitle}
                titleStyle={submitTitleStyle}
                {...submitButtonProps}
              />
            </View>
          </View>
        ) : (
          <Button
            onPress={onSubmit}
            title={submitTitle}
            titleStyle={submitTitleStyle}
            {...submitButtonProps}
          />
        )}
      </View>
    </Modal>
  );
};

Dialog.propTypes = {
  cancelTitle: PropTypes.string,
  isVisible: PropTypes.bool,
  message: PropTypes.string,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  submitTitle: PropTypes.string,
  cancelButtonProps: PropTypes.object,
  submitButtonProps: PropTypes.object,
  submitTitleStyle: Text.propTypes.style,
  cancelTitleStyle: Text.propTypes.style,
};

export default Dialog;
