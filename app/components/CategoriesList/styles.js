import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes, fontWeights } from '../../styles/index';

const { doubleIndent, verticalIndent } = dimensions;

export default StyleSheet.create({
  calendarIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    color: colors.greyDarker,
    fontSize: fontSizes.xmedium,
    fontWeight: fontWeights.bold,
    paddingVertical: verticalIndent,
    alignSelf: 'center',
  },

  headerContainer: {
    color: colors.greyDarker,
    fontSize: fontSizes.xmedium,
    fontWeight: fontWeights.bold,
  },

  textStyle: {
    fontSize: fontSizes.small,
  },

  container: {
    backgroundColor: 'white',
    marginVertical: doubleIndent,
  },

  modal: {
    margin: doubleIndent,
  },

  listContainer: {
    paddingTop: verticalIndent,
  },

  footer: {
    height: 85,
  },


});
