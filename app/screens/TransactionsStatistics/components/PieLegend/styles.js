import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';
import { dimensions, fontSizes } from '../../../../styles';


const styles = StyleSheet.create({
  root: {
    margin: dimensions.indent,
    marginLeft: dimensions.halfIndent,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  circle: {
    height: 12,
    width: 12,
    backgroundColor: colors.green,
    borderRadius: 6,
    marginRight: dimensions.halfIndent,
  },
  text: {
    fontSize: fontSizes.verySmall,
    color: colors.greyVeryDarker,
    maxWidth: 85,
  },
  emptyText: {
    paddingTop: dimensions.halfIndent,
    textAlign: 'center',
    fontSize: fontSizes.verySmall,
    color: colors.greyDarker,
  },
  textContainer: {
    flexDirection: 'row',
  },

});

export default styles;
