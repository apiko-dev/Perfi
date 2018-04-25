import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes } from '../../styles';

export default StyleSheet.create({

  option: {
    justifyContent: 'center',
    paddingHorizontal: dimensions.indent,
  },
  optionText: {
    fontSize: fontSizes.verySmall,
    color: colors.black,
  },
  inputStyle: {
    fontSize: fontSizes.verySmall,
    color: colors.greyDarker,
  },
  selectedInputStile: {
    color: colors.black,
  },
  selectedOption: {
    backgroundColor: colors.green,
  },
  label: {
    paddingBottom: dimensions.indent / 2,
    paddingTop: dimensions.indent / 2,
    fontSize: fontSizes.verySmall,
    fontWeight: '700',
  },
  rightIconStyle: {
    paddingRight: 0,
  },

  secondInputContainer: {
    paddingLeft: dimensions.halfIndent,
    borderColor: colors.grey,
  },
  selectedSecondInputContainer: {
    borderColor: colors.green,
  },
});
