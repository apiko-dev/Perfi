import { create } from 'react-native-platform-stylesheet';
import { colors, dimensions, fontSizes, fontWeights } from '../../styles';

const styles = create({
  iconStyle: {
    padding: dimensions.halfIndent,
  },
  rowStyle: {
    flexDirection: 'row',
  },
  modalStyle: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: dimensions.indent,
    paddingVertical: dimensions.indent,
    backgroundColor: colors.white,
  },
  title: {
    color: colors.greyDarker,
    fontSize: fontSizes.xmedium,
    fontWeight: fontWeights.bold,
    paddingBottom: dimensions.indent,
    alignSelf: 'center',
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
