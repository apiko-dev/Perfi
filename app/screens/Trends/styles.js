import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes } from '../../styles';
import fontWeights from '../../styles/fontWeights';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  chartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: dimensions.indent,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  subtitle: {
    marginHorizontal: dimensions.indent,
    paddingTop: dimensions.indent,
  },
  totalContainer: {
    flex: 1,
    paddingHorizontal: dimensions.indent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  valueContainer: {
    paddingHorizontal: 0,
    paddingVertical: 4,
  },
  valueText: {
    fontSize: fontSizes.medium,
  },
  totalText: {
    fontSize: fontSizes.xmedium,
    fontWeight: fontWeights.medium,
  },
  totalValueContainer: {
    paddingVertical: 5,
  },
  verticalAxisContainer: {
    position: 'absolute',
    top: 1,
    bottom: 47,
    width: 50,
    opacity: 0.9,
    backgroundColor: colors.white,
  },
});

export default styles;
