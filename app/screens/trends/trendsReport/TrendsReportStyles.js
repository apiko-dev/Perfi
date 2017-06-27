import { create } from 'react-native-platform-stylesheet';

const styles = create({
  dateRangeStyle: {
    justifyContent: 'space-between',
  },
  dateButtonStyle: {
    width: 120,
    android: {
      height: 40,
    },
    ios: {
      height: 24,
    },
  },
});

export default styles;
