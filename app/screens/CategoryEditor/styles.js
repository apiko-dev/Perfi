import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes } from '../../styles';


const { indent, verticalIndent } = dimensions;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  selectTextStyle: {
    fontSize: fontSizes.medium,
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalIndent,
  },

  label: {
    paddingTop: verticalIndent / 2,
    fontSize: fontSizes.verySmall - 1,
    color: colors.greyDarker,
  },

  secondContainer: {
    alignItems: 'center',
    marginRight: indent,
    paddingTop: fontSizes.verySmall,
  },

});

export default styles;
