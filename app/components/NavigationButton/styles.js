import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes } from '../../styles';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: dimensions.indent,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.red,
    fontSize: fontSizes.medium,
  },
});

export default styles;
