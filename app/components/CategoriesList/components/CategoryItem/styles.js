import { StyleSheet } from 'react-native';
import {
  colors,
  dimensions,
  fontSizes,
  scalingUtils,
} from '../../../../styles/index';

export default StyleSheet.create({
  container: {
    height: scalingUtils.verticalScale(62),
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  mainContentContainer: {
    justifyContent: 'center',
  },

  icon: {
    padding: dimensions.indent,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  title: {
    color: colors.greyVeryDarker,
    fontSize: fontSizes.small,
    // fontWeight: fontWeights.extraBold,
  },

  border: {
    borderWidth: 1,
    borderColor: colors.greyDarker,
  },
});

