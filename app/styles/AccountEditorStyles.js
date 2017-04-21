import { create } from 'react-native-platform-stylesheet';

const styles = create({
  lightRowStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 25,
  },
  darkRowStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#cfcfcf',
    paddingTop: 10,
    paddingBottom: 15,
  },
});

export default styles;
