import { StyleSheet } from 'react-native';
import {
  colors,
  dimensions,
  fontSizes,
  fontWeights,
  scalingUtils,
} from '../../styles/index';

export default StyleSheet.create({
  container: {
    height: scalingUtils.verticalScale(65),
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  mainContentContainer: {
    flex: 13,
    justifyContent: 'space-around',
    paddingVertical: dimensions.halfIndent / 2,
  },

  icon: {
    padding: dimensions.indent,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    color: colors.black,
    fontSize: fontSizes.small,
    fontWeight: fontWeights.extraBold,
  },

  accountName: {
    color: colors.greyDarker,
    fontSize: fontSizes.verySmall,
  },

  date: {
    color: colors.greyDarker,
    fontSize: fontSizes.small,
    fontWeight: fontWeights.extraBold,
  },

  buttonIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentText: {
    color: colors.greyVeryDarker,
    fontSize: fontSizes.medium,
  },

});

