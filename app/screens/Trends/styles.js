import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes, fontWeights } from '../../styles';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  chartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  pieContainer: {
    margin: dimensions.indent,
    marginRight: dimensions.halfIndent,
  },
  pieTotalValue: {
    color: colors.green,
    fontSize: fontSizes.xmedium,
    fontWeight: fontWeights.bold,
    marginBottom: 3,
  },
  pieDate: {
    color: colors.greyDarker,
    fontSize: fontSizes.verySmall,
    fontWeight: fontWeights.bold,
  },
  pieTextContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: dimensions.indent,
    paddingTop: dimensions.verticalIndent,
    marginBottom: dimensions.verticalIndent / 2,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  subtitle: {
    marginHorizontal: dimensions.indent,
    paddingTop: dimensions.indent,
  },
  totalContainer: {
    paddingHorizontal: dimensions.indent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  valueContainer: {
    paddingHorizontal: 0,
    paddingVertical: 2,
  },
  valueText: {
    fontSize: fontSizes.small,
  },
  totalText: {
    fontSize: fontSizes.medium,
  },
  totalValueContainer: {
    paddingVertical: 5,
  },
  verticalAxisContainer: {
    position: 'absolute',
    top: 1,
    bottom: 5,
    width: 50,
    backgroundColor: colors.white,
  },
});

export default styles;
