import { StyleSheet } from 'react-native';
import { colors, fontSizes, dimensions } from '../../styles';


const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    justifyContent: 'space-between',
  },
  generateButtonContainer: {
    paddingVertical: dimensions.indent,
  },
  generateButton: {
    height: dimensions.doubleIndent,
    width: '50%',
  },
  generateButtonTitle: {
    fontSize: fontSizes.small,
  },
  secondContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: colors.greyVeryDarker,
  },
  selectTextStyle: {
    fontSize: fontSizes.medium,
  },
});

export default styles;
