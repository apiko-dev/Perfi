import { create } from 'react-native-platform-stylesheet';
import colors from '../constants/colors';

const styles = create({
  iconContainerStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: colors.black,
    borderStyle: 'solid',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: colors.white,
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
    backgroundColor: colors.lightGray,
  },
});

export default styles;
