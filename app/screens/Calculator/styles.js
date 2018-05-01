import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights } from '../../styles';

const styles = StyleSheet.create({

  root: {
    flex: 1,
  },

  expressionContainerStyle: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green,
  },

  keyboardContainer: {
    flex: 4,
  },

  buttonsGroup: {
    flex: 3,
  },

  expressionStyle: {
    fontSize: fontSizes.xbig,
    textAlign: 'right',
    color: colors.white,
    fontWeight: fontWeights.bold,
  },

  keyboardRowStyle: {
    flex: 1,
    flexDirection: 'row',
  },

});

export default styles;
