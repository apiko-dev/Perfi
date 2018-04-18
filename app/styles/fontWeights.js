import { Platform } from 'react-native';

const fontWeights = {
  thin: Platform.select({ ios: '100', android: '100' }),
  extraLight: Platform.select({ ios: '200', android: '100' }),
  light: Platform.select({ ios: '300', android: '200' }),
  normal: Platform.select({ ios: '400', android: '300' }),
  medium: Platform.select({ ios: '500', android: '400' }),
  semiBold: Platform.select({ ios: '600', android: '500' }),
  bold: Platform.select({ ios: '700', android: '600' }),
  extraBold: Platform.select({ ios: '800', android: '700' }),
  heavy: Platform.select({ ios: '900', android: '800' }),
};

export default fontWeights;
