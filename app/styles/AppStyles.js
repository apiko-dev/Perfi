import { StyleSheet } from 'react-native';
import colors from './colors';
import { indent, doubleIndent, headerHeight, halfIndent } from './dimensions';

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
    fontSize: 30,
    color: colors.greyDarker,
  },
  logoContainer: {
    marginHorizontal: halfIndent,
  },
  headerStyle: {
    height: headerHeight,
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.greyOpacity,
    backgroundColor: colors.white,
  },
  headerTextStyle: {
    fontSize: 16,
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
  withoutMargins: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    // marginLeft: 0,
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
