import { Text } from 'react-native';
import { compose, setPropTypes } from 'recompose';
// import { withStyle } from '../utils/enhancers';

export default compose(
  setPropTypes(Text.propTypes),
  // withStyle({ fontFamily: 'Quattrocento-Regular' }),
)(Text);
