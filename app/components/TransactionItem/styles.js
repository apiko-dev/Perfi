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

  value: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: dimensions.indent,
    flexDirection: 'row',
  },

  valueText: {
    color: colors.green,
    fontSize: fontSizes.xmedium,
    fontWeight: fontWeights.extraBold,
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

  incomeColor: {
    color: colors.green,
  },

  expenseColor: {
    color: colors.red,
  },

  percentText: {
    color: colors.greyVeryDarker,
    fontSize: fontSizes.medium,
  },

});

