import { create } from 'react-native-platform-stylesheet';
import colors from '../../styles/colors';

const styles = create({
  iconStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 26,
    color: colors.secondaryText,
    backgroundColor: colors.white,
    borderStyle: 'solid',
  },
  rowStyle: {
    flexDirection: 'row',
  },
  modalStyle: {
    flex: 1,
  },
  listStyle: {
    flex: 1,
    alignSelf: 'center',
  },
  pickedItemStyle: {
    color: colors.defaultPrimary,
    backgroundColor: colors.lightGray,
  },
});

export default styles;
