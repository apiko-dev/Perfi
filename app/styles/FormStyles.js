import { create } from 'react-native-platform-stylesheet';

const styles = create({
  blockStyle: {
    paddingTop: 20,
    paddingBottom: 25,
  },
  blockStyleDark: {
    backgroundColor: '#ebebeb',
    paddingTop: 10,
    paddingBottom: 15,
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  listItemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
  },
  dropDownMenuStyle: {
    height: 36,
  },
});

export default styles;
