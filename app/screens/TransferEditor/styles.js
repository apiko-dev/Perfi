import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes, fontWeights } from '../../styles';


const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  selector: {
    alignItems: 'center',
    borderRadius: 4,
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
    borderColor: colors.darkGrey,
    paddingHorizontal: dimensions.halfVerticalIndent,
  },
  withoutPaddingBot: {
    paddingBottom: 0,
  },
  marginVertical: {
    marginVertical: dimensions.halfVerticalIndent,
  },
  selectTextStyle: {
    fontSize: fontSizes.medium,
  },
});

export default styles;
