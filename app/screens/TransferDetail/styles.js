import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes, fontWeights } from '../../styles';
import { halfIndent } from '../../styles/dimensions';

const { indent } = dimensions;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  withoutPaddingBottom: {
    padding: 0,
  },
  headerContainerRight: {
    backgroundColor: colors.transparent,
    padding: indent,
  },
  headerRight: {
    fontSize: fontSizes.verySmall,
    color: colors.green,
  },
  iconContainer: {
    marginHorizontal: 1,
    padding: indent * 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondContainer: {
    marginHorizontal: indent,
  },
  mainContentContainer: {
    flex: 13,
    justifyContent: 'space-around',
  },
  container: {
    flexDirection: 'row',
    margin: indent,
    marginTop: halfIndent,
  },
  title: {
    fontSize: fontSizes.small,
    fontWeight: fontWeights.semiBold,
  },
  secondTitle: {
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.extraLight,
    marginVertical: halfIndent,
  },
  accountName: {
    color: colors.greyDarker,
    fontSize: fontSizes.verySmall,
  },
  regular: {
    color: colors.gray,
    fontSize: fontSizes.small,
    fontWeight: fontWeights.extraLight,
  },
  value: {
    fontSize: fontSizes.big,
  },
});

export default styles;
