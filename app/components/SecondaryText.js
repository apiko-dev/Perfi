import { Text } from 'react-native';
import { compose, withProps } from 'recompose';
import colors from '../styles/colors';

export default compose(withProps({
  style: {
    color: colors.secondaryText,
  },
}))(Text);
