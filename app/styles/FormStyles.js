import { create } from 'react-native-platform-stylesheet';
import colors from './colors';

const styles = create({
  blockStyle: {
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 25,
  },
  blockStyleDark: {
    backgroundColor: colors.lightGray,
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
});

export default styles;
