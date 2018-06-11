import { Platform, StyleSheet } from 'react-native';
import { dimensions, colors, scalingUtils } from '../../styles';


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subtitle: {
    marginHorizontal: dimensions.indent,
    paddingTop: dimensions.indent,
  },
  paddingBottom: {
    paddingBottom: scalingUtils.verticalScale(Platform.OS === 'ios' ? 80 : 92),
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    overflow: 'hidden',
    height: dimensions.headerMaxHeight,
    zIndex: 1,
  },
  scrollViewContent: {
    paddingTop: Platform.OS !== 'ios' ? dimensions.headerMaxHeight : 0,
  },
  emptyList: {
    paddingTop: dimensions.indent * 1.5,
  },

});

export default styles;
