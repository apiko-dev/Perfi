import { compose, withProps, withHandlers } from 'recompose';
import { getParam, getParamOr, setParam } from '../../../utils/navHelpers';
import TransactionsHeader from './TransactionsHeader';

const enhance = compose(
  withProps(({ navigation }) => ({
    currentAccount: getParam('account')(navigation),
    onSelectAccount: setParam('account')(navigation),
    currentInterval: getParamOr('interval', 'day')(navigation),
    onSelectInterval: setParam('interval')(navigation),
    isChartShown: getParamOr('chartShown', false)(navigation),
  })),
  withHandlers({
    onToggleChart: ({ navigation, isChartShown }) => () => {
      setParam('chartShown', navigation, !isChartShown);
    },
  }),
);

export default enhance(TransactionsHeader);
