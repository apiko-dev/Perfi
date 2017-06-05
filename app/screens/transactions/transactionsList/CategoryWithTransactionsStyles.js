import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';
import normalize from '../../../utils/normalizeText';

const styles = StyleSheet.create({
  rootStyle: {
    backgroundColor: colors.white,
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  titleStyle: {
    flex: 0.75,
    fontSize: normalize(14),
  },
  iconContainerStyle: {
    marginRight: 10,
  },
  badgeContainerStyle: {
    backgroundColor: colors.gray,
  },
  leftTitleStyle: {
    flex: 0.25,
    textAlign: 'right',
  },
});

export default styles;
