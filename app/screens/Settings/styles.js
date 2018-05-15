import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../styles';


const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  container: {
    justifyContent: 'space-between',
  },

  secondContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  text: {
    color: colors.greyVeryDarker,
  },


  selectTextStyle: {
    fontSize: fontSizes.medium,
  },

});

export default styles;
