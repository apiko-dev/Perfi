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
  rowStyle__dark: {
    backgroundColor: '#ebebeb',
    paddingTop: 10,
    paddingBottom: 15,
  },
});

export default styles;
