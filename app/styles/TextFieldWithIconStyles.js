import { create } from 'react-native-platform-stylesheet';

const styles = create({
  textFieldWrapper: {
    position: 'relative',
    paddingLeft: 30,
  },
  iconWrapper: {
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
  },
  labelTextStyle: {
    margin: 5,
  },
});

export default styles;
