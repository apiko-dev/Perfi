import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';
import { fontSizes, fontWeights } from '../../../../styles';

const styles = StyleSheet.create({

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    height: 62,
  },
  icon: {
    marginLeft: 18,
    marginRight: 8,
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
    fontSize: fontSizes.medium,
    color: colors.black,
    fontWeight: fontWeights.normal,
  },

});

export default styles;
