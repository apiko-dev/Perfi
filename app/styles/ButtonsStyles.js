import { create } from 'react-native-platform-stylesheet';

const styles = create({
  buttonWrapper: {
    width: 33,
    height: 33,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper__raised: {
    elevation: 3,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: '#000',
    backgroundColor: '#ebebeb',
  },
});

export default styles;
