import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  lineContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  xLabelsContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  labelStyle: {
    fontSize: 10,
    color: colors.secondaryText,
  },
  xLabelStyle: {
    flex: 1,
    textAlign: 'center',
  },
  yLabelStyle: {
    paddingRight: 4,
    textAlign: 'right',
  },
  lineStyle: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
});

export default styles;
