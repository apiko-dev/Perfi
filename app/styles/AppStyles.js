import { Platform, StyleSheet } from 'react-native';
import colors from './colors';

const indent = 10;
const doubleIndent = indent * 2;
const iconMargin = Platform.OS === 'android' ? 16 : 10;

const styles = StyleSheet.create({
  blockStyle: {
    backgroundColor: colors.white,
  },
  containerStyle: {
    paddingLeft: doubleIndent,
    paddingRight: doubleIndent,
  },
  formInputStyle: {
    color: colors.primaryText,
  },
  headerIconStyle: {
    marginLeft: iconMargin,
    marginRight: iconMargin,
    fontSize: 26,
    color: colors.textPrimary,
  },
  headerStyle: {
    paddingLeft: indent,
    paddingRight: indent,
    backgroundColor: colors.defaultPrimary,
  },
  iconStyle: {
    fontSize: 24,
    color: colors.secondaryText,
  },
  rootStyle: {
    flex: 1,
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  withMarginBottom: {
    marginBottom: indent,
  },
  withMarginTop: {
    marginTop: indent,
  },
  withVerticalMargin: {
    marginTop: indent,
    marginBottom: indent,
  },
  withVerticalPadding: {
    paddingTop: indent,
    paddingBottom: indent,
  },
});

export default styles;
