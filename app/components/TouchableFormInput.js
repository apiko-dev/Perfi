import React, { PropTypes } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { FormInput } from 'react-native-elements';

const TouchableFormInput = ({ onPress, ...props }) => (
  <TouchableOpacity
    onPress={onPress}
  >
    <View>
      <FormInput
        {...props}
        editable={false}
      />
    </View>
  </TouchableOpacity>
);

TouchableFormInput.propTypes = {
  onPress: PropTypes.func,
};

export default TouchableFormInput;
