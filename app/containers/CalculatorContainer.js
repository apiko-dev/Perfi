import { defaultProps, compose, mapProps, withHandlers, withState } from 'recompose';
import R from 'ramda';
import { Calculator } from '../components';

const defaultExpr = '0';

const enhance = compose(
  withState('expr', 'updateExpr', ({ value }) => value || defaultExpr),
  withHandlers({
    onPressDigit: ({ expr, updateExpr }) => char => updateExpr(expr + char),
    onPressOperator: ({ expr, updateExpr }) => char => updateExpr(expr + char),
    onClear: ({ updateExpr }) => () => updateExpr(defaultExpr),
    onSubmit: () => () => {},
  }),
);

export default enhance(Calculator);
