import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';
import { scalingUtils, dimensions, fontSizes, fontWeights } from '../../../../styles/index';


const styles = StyleSheet.create({
  wrapper: {
    height: scalingUtils.verticalScale(150),
  },
  swiperButtons: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: dimensions.indent * 1.5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    opacity: 0.8,
    fontSize: fontSizes.xbig,
  },
  accountContainer: {
    flex: 1,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    margin: dimensions.indent,
    borderRadius: dimensions.borderRadius,
  },
  balanceText: {
    fontSize: fontSizes.big,
    color: colors.white,
    fontWeight: fontWeights.heavy,
  },
  accountNameText: {
    fontSize: fontSizes.verySmall,
    color: colors.white,
    fontWeight: fontWeights.bold,
  },
  accountNameContainer: {
    position: 'absolute',
    bottom: scalingUtils.verticalScale(10),
  },

});

export default styles;
