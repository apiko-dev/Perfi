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
  addButtonContainer: {
    borderWidth: scalingUtils.scale(2),
    borderColor: colors.greyDarker,
    borderStyle: 'dashed',
  },
  title: {
    fontSize: fontSizes.big,
    color: colors.white,
    fontWeight: fontWeights.heavy,
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
});

export default styles;
