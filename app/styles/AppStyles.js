import { create } from 'react-native-platform-stylesheet';
import colors from './colors';

const fillAll = {
  flex: 1,
};

const styles = create({
  rootContainerStyle: {
    ...fillAll,
    backgroundColor: colors.defaultPrimary,
  },
  rootStyle: {
    ...fillAll,
    backgroundColor: colors.white,
  },
  headerStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: colors.defaultPrimary,
  },
  headerIconStyle: {
    marginLeft: 16,
    marginRight: 16,
    color: colors.textPrimary,
  },
  containerStyle: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  iconStyle: {
    fontSize: 24,
    color: colors.gray,
  },
});

export default styles;
