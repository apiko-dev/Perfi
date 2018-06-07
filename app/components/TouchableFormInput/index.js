import React from 'react';
import T from 'prop-types';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import appStyles from '../../styles/AppStyles';
import { colors, dimensions } from '../../styles';

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
});
const TouchableFormInput = ({
  onPress, ...props, containerStyle, icon,
}) => (
  <TouchableOpacity
    onPress={onPress}
    {...props}
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
  onPress: T.func,
  containerStyle: T.any,
  icon: T.any,
};

export default TouchableFormInput;
