import { StyleSheet, Platform } from 'react-native';
import { colors, dimensions, fontSizes } from '../../styles';

export default StyleSheet.create({

  option: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: dimensions.indent + 2,
    paddingRight: dimensions.indent,
    borderBottomWidth: 0.5,
    borderColor: colors.greyLighter,
  },
  optionIcon: {
    paddingRight: dimensions.indent,
  },
  optionText: {
    fontSize: fontSizes.verySmall,
    color: colors.black,
  },
  inputStyle: {
    fontSize: fontSizes.verySmall,
    color: colors.greyDarker,
  },
  select: {
    ...Platform.select({
      ios: {
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: {
          height: 0,
          width: 0,
        },
      },
      android: {
        elevation: 2,
      },
    }),
  },
  selectedInputStile: {
    color: colors.black,
  },
  selectedOption: {
    backgroundColor: colors.green,
  },
  selectedOptionText: {
    color: colors.white,
  },
  label: {
    paddingBottom: dimensions.halfIndent,
    paddingTop: dimensions.halfIndent,
    fontSize: fontSizes.verySmall,
    fontWeight: '700',
  },
  rightIconStyle: {
    paddingRight: 5,
  },
  leftIconStyle: {
    paddingLeft: 0,
  },
  secondInputContainer: {
    paddingLeft: dimensions.indent,
    borderColor: colors.grey,
  },
  selectedSecondInputContainer: {
    borderColor: colors.green,
  },
});
