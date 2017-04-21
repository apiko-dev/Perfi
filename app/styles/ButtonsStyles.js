import { create } from 'react-native-platform-stylesheet';

const styles = create({
  buttonWrapper: {
    width: 38,
    height: 38,
    elevation: 3,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: '#000',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
