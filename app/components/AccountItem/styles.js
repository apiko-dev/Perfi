import { StyleSheet } from 'react-native';
import { dimensions, fontSizes, colors, fontWeights, scalingUtils } from '../../styles';


const styles = StyleSheet.create({
  container: {
    margin: dimensions.halfIndent,
  },
  accountContainer: {
    width: dimensions.length,
    height: dimensions.length,
    borderRadius: dimensions.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    fontSize: fontSizes.big,
    color: colors.white,
    fontWeight: fontWeights.heavy,
  },
  toLargeText: {
    color: colors.white,
    fontWeight: fontWeights.semiBold,
    fontSize: fontSizes.verySmall,
    textAlign: 'center',
    paddingBottom: 10,
  },
  valueContainer: {
    padding: dimensions.halfIndent,
  },
  subtitle: {
    fontSize: fontSizes.verySmall,
    color: colors.white,
    fontWeight: fontWeights.bold,
  },
  addButtonSubtitle: {
    fontSize: fontSizes.verySmall - 2,
    color: colors.greyDarker,
    fontWeight: fontWeights.bold,
  },
  subtitleContainer: {
    position: 'absolute',
    bottom: scalingUtils.verticalScale(10),
  },

  image: {
    width: dimensions.length,
    height: dimensions.length,
  },

});

export default styles;
