import { compose, withHandlers, withState, lifecycle, hoistStatics } from 'recompose';
import R from 'ramda';
import CalculatorScreenView from './CalculatorScreenView';
import { getParam } from '../../utils/navHelpers';
import screens from '../../constants/screens';

const defaultExpr = '0';

const hasDotInLastNumber = R.pipe(
  R.reject(R.complement(isNaN)),
  R.last,
  R.equals('.'),
);

const enhance = compose(
  withState('isIncome', 'setIsIncome', false),

  withState('expr', 'updateExpr', ({ value }) => value || defaultExpr),
  withHandlers({
    onBackspace: ({ expr, updateExpr }) => () => {
      updateExpr(expr.length > 1 ? R.init(expr) : defaultExpr);
    },
    onClear: ({ updateExpr }) => () => {
      updateExpr(defaultExpr);
    },
    onPressToken: ({ expr, updateExpr }) => (token) => {
      const lastToken = R.last(expr);
      let newExpr = expr;

      if (token === '.' && !hasDotInLastNumber(expr)) {
        newExpr += token;
      } else if (token === '00' && !isNaN(lastToken)) {
        if (expr !== '0') newExpr += token;
      } else if (!isNaN(token)) {
        if (expr === defaultExpr) {
          newExpr = token;
        } else {
          newExpr += token;
        }
      }

      updateExpr(newExpr);
    },
    onSubmitResult: ({ expr, navigation, isIncome }) => () => {
      navigation.navigate(screens.TransactionEditor, { value: isIncome ? +expr : -expr });
    },
  }),

  lifecycle({
    componentDidMount() {
      this.props.setIsIncome(getParam('type')(this.props.navigation) === 'income');
    },
  }),
);

export default hoistStatics(enhance)(CalculatorScreenView);
