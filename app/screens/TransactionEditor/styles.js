import { StyleSheet } from 'react-native';
import { dimensions, fontSizes, fontWeights } from '../../styles';


const styles = StyleSheet.create({

  valueText: {
    fontSize: fontSizes.xbig,
    fontWeight: fontWeights.extraBold,
    alignSelf: 'center',
    paddingTop: dimensions.verticalIndent,
    paddingBottom: dimensions.verticalIndent * 2,
  },

  selector: {
    alignItems: 'center',
    borderRadius: 4,
  },

  selectorContainer: {
    marginBottom: dimensions.verticalIndent,
  },

  root: {
    flex: 1,
  },

  withoutPaddingBot: {
    paddingBottom: 0,
  },

  noteContainer: {
    marginVertical: dimensions.verticalIndent,
  },

  selectTextStyle: {
    fontSize: fontSizes.medium,
  },

});

export default styles;
