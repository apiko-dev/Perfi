import { StatusBar } from 'react-native';
import { create } from 'react-native-platform-stylesheet';

const styles = create({
  containerStyle: {
    flex: 1,
    android: {
      marginTop: StatusBar.currentHeight,
    },
  },
  sceneWrapperStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    position: 'relative',
  },
});

export default styles;
