import { StyleSheet } from 'react-native';
import { colors, fontSizes, dimensions } from '../../styles';


const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
  },
  mainContainer: {
    flex: 1,
  },
  paddingContainer: {
    paddingHorizontal: dimensions.indent,
  },
  container: {
    flex: 1,
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
  selectText: {
    fontSize: fontSizes.medium,
    color: colors.primaryText,
  },
  selector: {
    height: 70,
  },
  selectSecondInputContainer: {
    height: 70,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    paddingRight: dimensions.halfIndent,
  },
  selectSelectedSecondInputContainer: {
    borderColor: colors.grey,
  },
});

export default styles;
