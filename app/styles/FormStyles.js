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
    borderBottomWidth: 0.5,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 0.5,
    borderColor: '#000000',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textStyle: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
  },
  listStyle: {
    marginTop: 5,
    flex: 1,
  },
  textInputStyle: {
    width: '100%',
    maxWidth: 250,
    height: 36,
    padding: 5,
  },
  dropDownMenuStyle: {
    height: 36,
  },
});

export default styles;
