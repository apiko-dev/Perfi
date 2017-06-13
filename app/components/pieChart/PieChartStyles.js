import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLayout: {
    position: 'absolute',
    flex: 1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'transparent',
  },
  singleLabelStyle: {
    justifyContent: 'center',
  },
  labelStyle: {
    position: 'absolute',
  },
});

export default styles;
