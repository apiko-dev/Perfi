import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights, dimensions, scalingUtils } from '../../../../styles/index';

const styles = StyleSheet.create({
  contentContainer: {
    height: scalingUtils.moderateScale(70),
    width: '100%',
    paddingLeft: dimensions.indent,
    paddingRight: dimensions.halfIndent,
    borderTopWidth: 1,
    borderTopColor: colors.grey,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    width: '85%',
  },
  titleText: {
    fontSize: fontSizes.medium,
    color: colors.primaryText,
    marginVertical: 2,
    fontWeight: fontWeights.medium,
  },
  valueText: {
    color: colors.secondaryText,
    fontSize: fontSizes.small,
    marginVertical: 2,
  },
});

export default styles;
