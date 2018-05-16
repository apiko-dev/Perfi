import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes, scalingUtils, fontWeights } from '../../styles';

const { indent } = dimensions;

const styles = StyleSheet.create({
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
});

export default styles;
