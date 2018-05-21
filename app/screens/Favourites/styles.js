import { StyleSheet } from 'react-native';
import { dimensions, colors } from '../../styles';


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subtitle: {
    marginHorizontal: dimensions.indent,
    paddingTop: dimensions.indent,
  },
});

export default styles;
