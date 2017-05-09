import { create } from 'react-native-platform-stylesheet';

const styles = create({
  rowStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 25,
  },
  rowStyleDark: {
    backgroundColor: '#ebebeb',
    paddingTop: 10,
    paddingBottom: 15,
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
});

export default styles;
