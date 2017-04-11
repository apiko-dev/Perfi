import { StatusBar } from 'react-native';
import { create } from 'react-native-platform-stylesheet';

const styles = create({
  containerStyle: {
    flex: 1,
    android: {
      marginTop: StatusBar.currentHeight,
    },
  },
});

export default styles;
