import { compose, withProps } from 'recompose';
import { getParam, getParamOr, setParam } from '../../../utils/navHelpers';
import TransactionsHeader from './TransactionsHeader';

const enhance = compose(
  withProps(({ navigation }) => ({
    currentAccount: getParam('account')(navigation),
    onSelectAccount: setParam('account')(navigation),
    currentInterval: getParamOr('interval', 'day')(navigation),
    onSelectInterval: setParam('interval')(navigation),
  })),
);

export default enhance(TransactionsHeader);
