import {
  compose,
  withProps,
} from 'recompose';
import Input from './Input';
import { withToggle } from '../../utils/enhancers';

const enhance = compose(
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
