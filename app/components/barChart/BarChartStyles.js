import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';


const styles = StyleSheet.create({
  chartContainerStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  xLabelsContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lineContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
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
