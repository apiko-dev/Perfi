import { create } from 'react-native-platform-stylesheet';

const styles = create({
  iconContainerStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#000',
    borderStyle: 'solid',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#fff',
  },
  rowStyle: {
    flexDirection: 'row',
  },
  modalStyle: {
    flex: 1,
  },
  listStyle: {
    flex: 1,
    alignSelf: 'center',
  },
  pickedItemStyle: {
    backgroundColor: '#e6e6e6',
  },
});

export default styles;
