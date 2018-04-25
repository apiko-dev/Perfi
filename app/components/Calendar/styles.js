import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes, scalingUtils } from '../../styles';

const { indent, verticalIndent } = dimensions;

export default StyleSheet.create({
  calendarIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: verticalIndent,
    paddingHorizontal: indent,
    marginTop: verticalIndent,
    marginBottom: verticalIndent / 2,
    alignItems: 'center',
  },

  cancelButtonText: {
    color: colors.red,
  },

  doneButtonText: {
    color: colors.green,
  },

  textStyle: {
    fontSize: fontSizes.small,
  },

  container: {
    backgroundColor: 'white',
    paddingVertical: verticalIndent,
  },

  modal: {
    marginHorizontal: scalingUtils.moderateScale(5),
  },

});
