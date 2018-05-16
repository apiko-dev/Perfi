import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes, scalingUtils, fontWeights } from '../../styles';

const { indent } = dimensions;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
  },
  container: {

  },
  subtitle: {
    marginHorizontal: dimensions.indent,
    paddingTop: dimensions.indent,
    paddingBottom: 0,
  },
  separator: {
    opacity: 0.2,
  },
  card: {
    padding: 5,
    margin: 5,
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderColor: colors.greyDarker,
  }
});

export default styles;
