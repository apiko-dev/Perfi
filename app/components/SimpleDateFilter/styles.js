import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes, fontWeights, scalingUtils } from '../../styles';

const styles = StyleSheet.create({
  dateSelector: {
    alignItems: 'center',
    width: scalingUtils.moderateScale(100),
    borderRadius: 4,
  },
  selectors: {
    marginTop: dimensions.indent,
    paddingHorizontal: dimensions.indent,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: dimensions.verticalIndent * 2.8,
  },
  btnContainer: {
    height: undefined,
    borderRadius: 4,
    borderColor: colors.grey,
    borderWidth: 1,
    backgroundColor: colors.white,
    // paddingHorizontal: dimensions.indent,
    paddingHorizontal: dimensions.halfIndent,

  },
  btTitleStyle: {
    height: undefined,
    fontSize: fontSizes.verySmall - 1,
    color: colors.greyDarker,
    fontWeight: fontWeights.normal,
  },
  activeButtonBackgroundColor: {
    backgroundColor: colors.green,
    borderColor: colors.green,
  },
  rangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',


  },
});

export default styles;
