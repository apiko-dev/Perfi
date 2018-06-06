import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes, fontWeights, scalingUtils } from '../../styles';

const styles = StyleSheet.create({
  dateSelector: {
    alignItems: 'center',
    width: scalingUtils.moderateScale(105),
    borderRadius: 4,
  },
  selectors: {
    marginTop: dimensions.indent,
    paddingHorizontal: dimensions.indent,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnContainer: {
    height: undefined,
    borderRadius: 4,
    width: scalingUtils.moderateScale(75),
    borderColor: colors.grey,
    borderWidth: 1,
    backgroundColor: colors.white,

  },
  btTitleStyle: {
    height: undefined,
    fontSize: fontSizes.verySmall,
    color: colors.greyDarker,
    fontWeight: fontWeights.normal,
  },
  activeButtonBackgroundColor: {
    backgroundColor: colors.green,
    borderColor: colors.green,
  },
});

export default styles;
