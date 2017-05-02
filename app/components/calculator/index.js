import { defaultProps, compose, mapProps, withHandlers, withState } from 'recompose';
import R from 'ramda';
import Calculator from './Calculator';

const defaultExpr = '0';

const enhance = compose(
  withState('expr', 'updateExpr', ({ value }) => value || defaultExpr),
  withHandlers({
    onPressToken: ({ expr, updateExpr }) => token => {
      if (isNaN(token)) {

      } else {
        if (expr === defaultExpr) {
          updateExpr(token);
        } else {
          updateExpr(expr + token);
        }
      }
    },
    onClear: ({ updateExpr }) => () => updateExpr(defaultExpr),
    onSubmit: () => () => {},
  }),
);

export default enhance(Calculator);
