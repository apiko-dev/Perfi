import React, { PropTypes } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { FormInput } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../styles/TouchableFormInputStyles';

const TouchableFormInput = (props) => {
  const { containerStyle, icon, iconStyle, inputStyle, onPress, ...inputProps } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={[containerStyle, icon && styles.containerWithIconStyle]}>
        {icon && (
          <MaterialCommunityIcons
            style={[styles.iconStyle, iconStyle]}
            name={icon}
          />
        )}
        <FormInput
          containerStyle={[icon && styles.inputWithIconStyle, inputStyle]}
          {...inputProps}
          editable={false}
        />
      </View>
    </TouchableOpacity>
  );
};

TouchableFormInput.propTypes = {
  containerStyle: View.propTypes.style,
  iconStyle: View.propTypes.style,
  inputStyle: View.propTypes.style,
  icon: PropTypes.string,
  onPress: PropTypes.func,
};

export default TouchableFormInput;
