import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';

const {
  borderRadius, doubleIndent, indent, letterSpacing,
} = dimensions;

export default StyleSheet.create({
  modal: {
    margin: indent,
  },
  container: {
    padding: indent,
    backgroundColor: colors.background,
    borderRadius,
  },
  text: {
    padding: doubleIndent,
    textAlign: 'center',
    fontSize: 17,
  },
  cancelTitle: {
    color: colors.lightSecondaryText,
    letterSpacing,
  },
});
