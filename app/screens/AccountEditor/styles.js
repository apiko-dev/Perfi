import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes } from '../../styles';


const { indent, verticalIndent } = dimensions;

const length = verticalIndent * 3.5;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  colorPickerContainer: {
    width: length,
    height: length,
    borderRadius: verticalIndent * 2,
  },

  modal: {
    height: 220,
    width: 220,
    alignSelf: 'center',
  },

  label: {
    paddingTop: verticalIndent / 2,
    fontSize: fontSizes.verySmall,
    color: colors.greyDarker,
  },

  secondContainer: {
    alignItems: 'center',
    marginRight: indent,
    paddingTop: fontSizes.verySmall,
  },

  balanceContainer: {
    marginTop: verticalIndent * 2,
    marginBottom: verticalIndent,
  },


});

export default styles;
