import { create } from 'react-native-platform-stylesheet';

const styles = create({
  fixedButtonContainer: {
    position: 'absolute',
    right: 0,
    bottom: 15,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  nuvButtonsContainerStyle: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderWidth: 1,
    paddingLeft: 30,
    paddingRight: 30,
  },
});

export default styles;
