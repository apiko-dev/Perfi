import { create } from 'react-native-platform-stylesheet';

const styles = create({
  buttonWrapperStyle: {
    width: 33,
    height: 33,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapperStyleRaised: {
    elevation: 3,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: '#000',
    backgroundColor: '#ebebeb',
  },
  buttonWrapperStyleBig: {
    width: 50,
    height: 50,
  },
  fixedButtonContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    padding: 10,
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
