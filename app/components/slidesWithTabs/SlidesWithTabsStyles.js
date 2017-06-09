import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const { width: windowWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
  },
  tabsContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabStyle: {
    width: 0.34 * windowWidth,
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: colors.defaultPrimary,
  },
  currentTabStyle: {
    borderBottomWidth: 2,
    borderBottomColor: colors.accent,
  },
});

export default styles;
