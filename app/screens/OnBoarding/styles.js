import { StyleSheet, Dimensions } from 'react-native';
import { dimensions, colors, fontSizes, fontWeights } from '../../styles';

const { width, height } = Dimensions.get('window');
const { indent, halfIndent } = dimensions;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  slide: {
    flex: 1,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width,
    height: height / 2.1,
  },
  text: {
    color: colors.gray,
    fontSize: fontSizes.small,
    fontWeight: fontWeights.extraLight,
  },
  paginationStyle: {
    marginBottom: indent * 3,
  },
  dot: {
    height: halfIndent / 1.5,
    width: halfIndent / 1.5,
    margin: halfIndent,
    borderWidth: 1,
    borderRadius: halfIndent / 3,
    borderColor: colors.grey,
  },
  activeDot: {
    backgroundColor: colors.green,
    borderColor: colors.green,
  },
});

export default styles;
