import React from 'react';
import T from 'prop-types';
import {
  Platform,
  KeyboardAvoidingView as KeyboardAvoiding,
} from 'react-native';
import { Constants } from 'expo';
import { dimensions } from '../../styles';

const keyboardOffset = dimensions.appBarHeight + 16 + Constants.statusBarHeight;

const defaultAvoid =
  Platform.OS === 'ios'
    ? {
      behavior: 'padding',
      keyboardVerticalOffset: 0,
    }
    : {};

const avoidWithHeader =
  Platform.OS === 'ios'
    ? {
      behavior: 'padding',
      keyboardVerticalOffset: keyboardOffset,
    }
    : {};

const KeyboardAvoidingView = ({ withHeader, children, ...props }) => {
  const keyboardAvoidingProps =
    withHeader ?
      avoidWithHeader :
      defaultAvoid;

  return (
    <KeyboardAvoiding {...keyboardAvoidingProps} {...props}>
      {children}
    </KeyboardAvoiding>
  );
};

KeyboardAvoidingView.propTypes = {
  withHeader: T.bool,
  children: T.any,
};

export default KeyboardAvoidingView;
