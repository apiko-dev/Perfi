import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';

const styles = StyleSheet.create({
  separator: {
    width: StyleSheet.hairlineWidth,
    marginLeft: dimensions.indent,
    marginRight: dimensions.indent,
    backgroundColor: colors.border,
  },
});

export default styles;
