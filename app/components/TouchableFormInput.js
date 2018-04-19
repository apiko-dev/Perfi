import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import { StyleSheet, View, ViewPropTypes } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import appStyles from '../styles/AppStyles';
import { colors, dimensions } from '../styles';

const { indent, verticalIndent } = dimensions;

const styles = StyleSheet.create({
  containerWithIconStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: verticalIndent * 3,
    paddingLeft: indent,
    paddingRight: indent,
    borderColor: colors.greyDarker,
    borderWidth: 1,
    borderRadius: 4,
  },
  inputWithIconStyle: {
    marginLeft: 10,
  },
});

const TouchableFormInput = ({ onPress, ...props, containerStyle, icon }) => (
  <TouchableOpacity
    onPress={onPress}
  >
    <View style={[containerStyle, icon && styles.containerWithIconStyle]}>
      <View />
      {icon && (
        <MaterialCommunityIcons
          style={[appStyles.iconStyle]}
          name={icon}
        />
      )}
    </View>

  </TouchableOpacity>
);

TouchableFormInput.propTypes = {
  onPress: PropTypes.func,
};

export default TouchableFormInput;






// const FormInputWithIcon = (props) => {
//   const { containerStyle, icon, iconStyle, inputStyle, ...inputProps } = props;
//
//   return (
//     <View style={[containerStyle, icon && styles.containerWithIconStyle]}>
//       {icon && (
//         <MaterialCommunityIcons
//           style={[appStyles.iconStyle, iconStyle]}
//           name={icon}
//         />
//       )}
//       <FormInput
//         containerStyle={[icon && styles.inputWithIconStyle, inputStyle]}
//         inputStyle={appStyles.formInputStyle}
//         {...inputProps}
//       />
//     </View>
//   );
// };
//
// FormInputWithIcon.propTypes = {
//   containerStyle: ViewPropTypes.style,
//   iconStyle: ViewPropTypes.style,
//   inputStyle: ViewPropTypes.style,
//   icon: PropTypes.string,
// };
//
// export default FormInputWithIcon;
