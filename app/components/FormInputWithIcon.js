import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { FormInput } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../styles/FormInputWithIconStyles';

const FormInputWithIcon = (props) => {
  const { containerStyle, icon, iconStyle, inputStyle, ...inputProps } = props;

  return (
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
      />
    </View>
  );
};

FormInputWithIcon.propTypes = {
  containerStyle: View.propTypes.style,
  iconStyle: View.propTypes.style,
  inputStyle: View.propTypes.style,
  icon: PropTypes.string,
};

export default FormInputWithIcon;
