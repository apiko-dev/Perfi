import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';
import { scalingUtils, dimensions } from '../../../../styles/index';

const dotSize = scalingUtils.moderateScale(6);

const styles = StyleSheet.create({
  wrapper: {
    height: scalingUtils.verticalScale(150),
  },

  paginationStyle: {
    bottom: dimensions.verticalIndent / 2,
  },

  dot: {
    backgroundColor: colors.greyDarker,
    width: dotSize,
    height: dotSize,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    // marginTop: 3,
    marginBottom: 6,
  },

  activeDot: {
    backgroundColor: colors.green,
  },

  accountsGroup: {
    flexDirection: 'row',
  },
});

export default styles;
