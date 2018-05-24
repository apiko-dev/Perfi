import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles/index';
import fontSizes from '../../styles/fontSizes';
import fontWeights from '../../styles/fontWeights';
import { moderateScale } from '../../styles/scalingUtils';

const { indent } = dimensions;

export default StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: indent,
    width: '90%',
    height: '55%',
  },
  containerTitle: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: fontSizes.xmedium,
    fontWeight: fontWeights.semiBold,
  },
  containerContent: {
    flex: 4,
    alignItems: 'center',
  },
  containerButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    color: colors.green,
    marginHorizontal: indent * 1.5,
    fontWeight: fontWeights.semiBold,
  },
  item: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(20),
  },
});
