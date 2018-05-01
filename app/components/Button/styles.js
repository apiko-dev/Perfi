import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes } from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green,
    height: dimensions.verticalIndent * 4,
  },
  containerPressed: {
    backgroundColor: colors.buttonPressed,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.big,
    fontWeight: '800',
  },
  titlePressed: {
    color: colors.white,
  },
  titleDisabled: {
    color: colors.grey,
  },
  disabled: {
    backgroundColor: colors.secondaryOpacity,
  },

  rowAligned: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  marginLeft: {
    marginLeft: dimensions.indent,
  },

  marginRight: {
    marginRight: dimensions.indent,
  },

});

export default styles;
