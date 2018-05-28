import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../../../styles/index';
import fontWeights from '../../../../styles/fontWeights';

const { indent } = dimensions;

export default StyleSheet.create({
  button: {
    color: colors.green,
    marginHorizontal: indent * 1.5,
    fontWeight: fontWeights.semiBold,
  },
});
