import R from 'ramda';
import {
  compose,
  defaultProps,
  withHandlers,
  withState,
  lifecycle,
  withPropsOnChange,
} from 'recompose';
import Select from './Select';

const enhance = compose(
  defaultProps({
    maxOptionsToDisplay: 4,
    keyToRender: 'name',
    optionHeight: 42,
    options: [],
  }),

  withState('isDropped', 'setDropped', false),
  withState('optionWidth', 'setOptionWidth', 100),
  withState('isSelected', 'selectItem', null),

  withPropsOnChange(['isActiveSelector'], (props) => {
    if (!props.isActiveSelector) {
      props.selectItem(null);
    }
  }),

  withHandlers({
    onSelect: props => (index, value) => {
      if (props.onSelect) props.onSelect(index, value);
      props.selectItem(value);
    },
    onSetOptionWidth: props => event =>
      props.setOptionWidth(
        R.pathOr(100, ['nativeEvent', 'layout', 'width'], event),
      ),
    onDropped: props => () => props.setDropped(!props.isDropped),
  }),

  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (this.props.disabled !== nextProps.disabled &&
      nextProps.disabled === true) {
        this.props.selectItem(null);
      }
    },
  }),
);

export default enhance(Select);
