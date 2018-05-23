import { withProps } from 'recompose';
import R from 'ramda';

export default withProps(R.pathOr({}, ['navigation', 'state', 'params']));
