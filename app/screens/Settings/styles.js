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
    flexDirection: 'row',
    paddingVertical: dimensions.indent,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    height: dimensions.doubleIndent,
    width: '45%',
  },
  buttonTitle: {
    fontSize: fontSizes.small,
  },
  subTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
