import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes } from '../../styles';

export default StyleSheet.create({

  inputStyle: {
    fontSize: fontSizes.medium,
    color: colors.greyDarker,
  },
  selectedInputStile: {
    color: colors.black,
  },
  label: {
    paddingBottom: dimensions.indent / 2,
    paddingTop: dimensions.indent / 2,
    fontSize: fontSizes.medium,
    fontWeight: '700',
  },
  leftIconStyle: {
    paddingLeft: 0,
  },
  rightIconStyle: {
    paddingRight: 5,
  },
  secondInputContainer: {
    borderColor: colors.grey,
  },
  selectedSecondInputContainer: {
    borderColor: colors.green,
  },
});
