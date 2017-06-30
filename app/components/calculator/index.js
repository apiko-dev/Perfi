import { compose, withHandlers, withState, withProps } from 'recompose';
import R from 'ramda';
import { Parser } from 'expr-eval';
import Calculator from './Calculator';

const defaultExpr = '0';

const operators = ['+', '-', '*', '/'];

const isOperator = token => R.contains(token, operators);

const hasDotInLastNumber = R.pipe(
  R.reject(R.complement(isNaN)),
  R.last,
  R.equals('.'),
);

const removeTailOperator = R.replace(/[^0-9]$/, '');

const enhance = compose(
  withState('expr', 'updateExpr', ({ value }) => value || defaultExpr),
  withProps(({ expr }) => ({
    isReadyForSubmit: R.none(isOperator, expr),
  })),
  withHandlers({
    onBackspace: ({ expr, updateExpr }) => () => {
      updateExpr(expr.length > 1 ? R.init(expr) : defaultExpr);
    },
    onCalculate: ({ expr, updateExpr }) => () => {
      updateExpr(Parser.evaluate(removeTailOperator(expr)));
    },
    onClear: ({ updateExpr }) => () => {
      updateExpr(defaultExpr);
    },
    onPressToken: ({ expr, updateExpr }) => (token) => {
      const lastToken = R.last(expr);
      let newExpr = expr;

      if (token === '.' && !hasDotInLastNumber(expr)) {
        newExpr += token;
      } else if (token === '000' && !isNaN(lastToken)) {
        newExpr += token;
      } else if (isOperator(token)) {
        if (!isOperator(lastToken) && expr !== defaultExpr) {
          newExpr += token;
        } else if (isOperator(lastToken) || lastToken === '.') {
          newExpr = R.init(expr) + token;
        }
      } else if (!isNaN(token)) {
        if (expr === defaultExpr) {
          newExpr = token;
        } else {
          newExpr += token;
        }
      }

      updateExpr(newExpr);
    },
    onSubmitResult: ({ expr, onSubmit }) => () => {
      onSubmit(+expr);
    },
  }),
);

export default enhance(Calculator);
