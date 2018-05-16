import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes } from '../../styles';

const styles = StyleSheet.create({
  list: {
    marginTop: dimensions.halfIndent,
  },
  paddingBottom: {
    paddingBottom: 85,
  },
  emptyText: {
    paddingTop: dimensions.halfIndent,
    textAlign: 'center',
    fontSize: fontSizes.small,
    color: colors.greyDarker,
  },
});

export default styles;
