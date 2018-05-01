import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights } from '../../../../styles/index';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  buttonStyle: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.greyLighter,
    flex: 1,
  },
  buttonTextStyle: {
    fontSize: fontSizes.big,
    fontWeight: fontWeights.normal,
    color: colors.greyVeryDarker,
  },
});

export default styles;
