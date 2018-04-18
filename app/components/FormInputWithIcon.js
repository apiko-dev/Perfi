import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import { FormInput } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import appStyles from '../styles/AppStyles';

const styles = StyleSheet.create({
  containerWithIconStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWithIconStyle: {
    marginLeft: 10,
  },
});

const FormInputWithIcon = (props) => {
  const { containerStyle, icon, iconStyle, inputStyle, ...inputProps } = props;

  return (
    <View style={[containerStyle, icon && styles.containerWithIconStyle]}>
      {icon && (
        <MaterialCommunityIcons
          style={[appStyles.iconStyle, iconStyle]}
          name={icon}
        />
      )}
      <FormInput
        containerStyle={[icon && styles.inputWithIconStyle, inputStyle]}
        inputStyle={appStyles.formInputStyle}
        {...inputProps}
      />
    </View>
  );
};

FormInputWithIcon.propTypes = {
  containerStyle: ViewPropTypes.style,
  iconStyle: ViewPropTypes.style,
  inputStyle: ViewPropTypes.style,
  icon: PropTypes.string,
};

export default FormInputWithIcon;
