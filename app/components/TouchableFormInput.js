import React, { PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';
import FormInputWithIcon from './FormInputWithIcon';

const TouchableFormInput = ({ onPress, ...props }) => (
  <TouchableOpacity
    onPress={onPress}
  >
    <FormInputWithIcon
      {...props}
      editable={false}
    />
  </TouchableOpacity>
);

TouchableFormInput.propTypes = {
  onPress: PropTypes.func,
};

export default TouchableFormInput;
