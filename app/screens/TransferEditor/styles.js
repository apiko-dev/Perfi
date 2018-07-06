import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes } from '../../styles';


const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  selector: {
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: colors.white,
  },
  containerIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: dimensions.verticalIndent,
  },
  card: {
    borderWidth: 1,
    borderRadius: 4,
    borderStyle: 'dashed',
    borderColor: colors.grey,
    padding: dimensions.halfVerticalIndent,
  },
  withoutPaddingBottom: {
    paddingBottom: 0,
  },
  marginVertical: {
    marginVertical: dimensions.halfIndent,
  },
  containerInputStyle: {
    backgroundColor: colors.white,
  },
  selectTextStyle: {
    fontSize: fontSizes.medium,
  },
  secondInputContainer: {
    paddingLeft: dimensions.indent,
    borderColor: colors.white,
  },
  selectedSecondInputContainer: {
    borderColor: colors.white,
  },
  inputText: {
    color: colors.greyVeryDarker,
  },
  error: {
    fontSize: fontSizes.small,
    color: colors.white,
    fontWeight: '700',
    lineHeight: fontSizes.small,
  },
});

export default styles;
