import {
  compose,
  withProps,
  defaultProps,
} from 'recompose';
import Input from './Input';
import { withToggle } from '../../utils/enhancers';

/**
 * velue must be only string, not Number!
 */
const enhance = compose(
  withProps(({ value }) => ({
    value: String(value),
  })),
  defaultProps({
    isValid: true,
  }),
  withToggle('isFocus', 'setFocus', 'onToggleFocus'),
  withProps(props => ({
    onFocus: () => {
      props.onToggleFocus(true);
      props.onFocus && props.onFocus();
    },
    onBlur: () => {
      props.onToggleFocus(false);
      props.onBlur && props.onBlur();
    },
    isNotValid: !props.isValid && !!props.value,
  })),
);

export default enhance(Input);
