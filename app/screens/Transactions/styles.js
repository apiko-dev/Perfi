import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes, scalingUtils, fontWeights } from '../../styles';

const { indent } = dimensions;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },

  subtitle: {
    marginHorizontal: dimensions.indent,
    paddingTop: dimensions.indent,
    paddingBottom: 0,
  },

  paddingHorizontal: {
    paddingLeft: dimensions.halfIndent,
    paddingRight: dimensions.halfIndent,
  },

  list: {
    marginTop: dimensions.halfIndent,
  },

  paddingBottom: {
    paddingBottom: 85,
  },

  emptyText: {
    paddingTop: dimensions.halfIndent,
    alignSelf: 'center',
    fontSize: fontSizes.small,
    color: colors.greyDarker,
  },

  dateSelector: {
    alignItems: 'center',
    width: scalingUtils.moderateScale(100),
    borderRadius: 4,

  },

  selectors: {
    marginTop: dimensions.indent,
    paddingHorizontal: indent,
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

  activeButtonColor: {
    color: colors.white,
  },

  separator: {
    opacity: 0.2,
  },

  pieContainer: {
    flex: 1,
    paddingTop: dimensions.verticalIndent,
    backgroundColor: 'orange',
    alignItems: 'center',
  },

});

export default styles;
