import { compose, withHandlers, withState, lifecycle, hoistStatics } from 'recompose';
import { connect } from 'react-redux';
import R from 'ramda';
import CalculatorScreenView from './CalculatorScreenView';
import screens from '../../constants/screens';
import { withPickParams } from '../../utils/enhancers';

const defaultExpr = '0';

const hasDotInLastNumber = R.pipe(
  R.reject(R.complement(isNaN)),
  R.last,
  R.equals('.'),
);

const mapStateToProps = (state, props) => ({
  value: R.pathOr('', ['transactions', 'byId', props.id, 'value'], state),
});

const enhance = compose(
  withPickParams,
  connect(mapStateToProps),
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
    onSubmitResult: ({ expr, navigation, id }) => () => {
      navigation.navigate(
        screens.TransactionEditor, { value: expr, id });
    },
  }),

  lifecycle({
    componentDidMount() {
      const { setIsIncome, value, updateExpr, type } = this.props;

      setIsIncome(type === 'income');
      if (value) updateExpr(value);
    },
  }),
);

export default hoistStatics(enhance)(CalculatorScreenView);
