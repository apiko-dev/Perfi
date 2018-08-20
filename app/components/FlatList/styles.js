import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes } from '../../styles';

const styles = StyleSheet.create({
  list: {
    // marginTop: dimensions.halfIndent,
  },
  paddingBottom: {
    paddingBottom: 85,
  },
  emptyText: {
    paddingTop: dimensions.indent,
    textAlign: 'center',
    fontSize: fontSizes.small,
    color: colors.greyDarker,
  },
  listContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
