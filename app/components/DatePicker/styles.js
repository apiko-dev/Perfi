import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes } from '../../styles';

const { indent, verticalIndent } = dimensions;

export default StyleSheet.create({
  root: {
    width: undefined,
  },
  label: {
    paddingVertical: indent / 2,
    fontSize: fontSizes.medium,
    fontWeight: '700',
  },
  body: {
    height: undefined,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: colors.white,

    alignItems: 'center',
    height: verticalIndent * 3,
    borderColor: colors.greyDarker,
    borderWidth: 1,
    borderRadius: 4,
  },
  inputText: {
    fontSize: fontSizes.medium,
    color: colors.primary,
    paddingHorizontal: indent,
  },
  icon: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: indent,
    color: colors.greyDarker,
  },
  btnConfirm: {
    color: colors.green,
    fontSize: fontSizes.medium,
    fontWeight: '700',
  },
  btnCancel: {
    color: colors.red,
    fontSize: fontSizes.medium,
    fontWeight: '700',
  },
  placeholder: {
    fontSize: fontSizes.medium,
    color: colors.grey,
    paddingHorizontal: indent,
  },
});
