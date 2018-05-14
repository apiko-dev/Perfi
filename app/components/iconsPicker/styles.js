import { create } from 'react-native-platform-stylesheet';
import { colors, dimensions } from '../../styles';

const styles = create({
  iconStyle: {
    padding: dimensions.halfIndent + 2,
  },
  rowStyle: {
    flexDirection: 'row',
    paddingHorizontal: dimensions.halfIndent,
  },
  modalStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  listStyle: {
    backgroundColor: colors.white,
    alignSelf: 'center',
  },
  pickedItemStyle: {
    color: colors.defaultPrimary,
    backgroundColor: colors.lightGray,
  },
});

export default styles;
