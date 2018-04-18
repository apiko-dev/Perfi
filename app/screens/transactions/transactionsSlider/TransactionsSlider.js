import { compose, withProps } from 'recompose';
import { SlidesWithTabs } from '../../../components';
import screens from '../../../constants/screens';
import { getParam, getParamOr } from '../../../utils/navHelpers';
import { getPeriodName } from '../../../utils/dateHelpers';
import TransactionSlideContainer from './TransactionSlideContainer';

const getInterval = getParamOr('interval', 'day');

const withSlideProps = navigation => withProps({
  account: getParam('account')(navigation),
  interval: getInterval(navigation),
  onSelectTransaction: transaction => navigation.navigate(
    screens.TransactionEditor,
    { transaction },
  ),
  showChart: getParam('showChart')(navigation),
});

const enhance = compose(
  withProps(({ navigation }) => ({
    slideRenderer: compose(withSlideProps(navigation))(TransactionSlideContainer),
    title: getPeriodName(getInterval(navigation)),
  })),
);

export default enhance(SlidesWithTabs);
