import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes } from '../../styles';

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    // justifyContent: 'space-between',
    // alignItems: 'center',
    marginLeft: dimensions.indent * -1.5,
    marginRight: dimensions.indent * -1.5,
  },
  title: {
    // flex: 1,
    color: colors.headerText,
    fontSize: fontSizes.xmedium,
    textAlign: 'center',
    letterSpacing: 1.3,

  },
  titleLeft: {
    textAlign: 'right',
    letterSpacing: 0,
  },
  titleRight: {
    textAlign: 'left',
    letterSpacing: 1,
  },
});

export default styles;
