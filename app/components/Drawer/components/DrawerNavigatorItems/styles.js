import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';
import { fontSizes, fontWeights, dimensions } from '../../../../styles';

const styles = StyleSheet.create({

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey,
    height: 62,
  },
  icon: {
    marginLeft: dimensions.indent,
    marginRight: dimensions.indent,
    alignItems: 'center',
  },
  inactiveIcon: {
    opacity: 0.62,
  },
  activeIcon: {
    borderLeftWidth: 5,
    borderLeftColor: colors.green,
  },
  label: {
    fontSize: fontSizes.small,
    color: colors.greyVeryDarker,
    fontWeight: fontWeights.normal,
  },

});

export default styles;
