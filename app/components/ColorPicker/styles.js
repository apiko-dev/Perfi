import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles/index';
import fontSizes from '../../styles/fontSizes';
import fontWeights from '../../styles/fontWeights';

const { indent } = dimensions;

export default StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: indent * 1.5,
    flex: 0,
    width: '90%',
    minHeight: '55%',
  },
  containerTitle: {
    flex: 1.5,
    justifyContent: 'center',
  },
  title: {
    color: colors.greyVeryDarker,
    fontSize: fontSizes.big,
    fontWeight: fontWeights.semiBold,
  },
  containerContent: {
    flex: 4,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
