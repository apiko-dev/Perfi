import { Text } from 'react-native';
import { compose } from 'recompose';
import { withStyle } from '../utils/enhancers';
import colors from '../styles/colors';

export default compose(withStyle({ color: colors.secondaryText }))(Text);
