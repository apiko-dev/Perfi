import { connect } from 'react-redux';
import R from 'ramda';
import { compose, withProps } from 'recompose';
import { setParam } from '../../../../utils/navHelpers';
import AccountsSwiperView from './AccountsSwiperView';


const splitTo = (arr, n = 3) => arr.reduce((accumulator, currentValue, currentIndex) => {
  if (currentIndex % n === 0) accumulator.push([]);
  accumulator[accumulator.length - 1].push(currentValue);
  return accumulator;
}, []);

const mapStateToProps = ({ accounts }) => ({ accounts: R.values(accounts.byId) });

const enhance = compose(
  connect(mapStateToProps),
  withProps(props => ({
    onSelectAccount: setParam('account')(props.navigation),
    groupedAccounts: splitTo(props.accounts),
  })),
);

export default enhance(AccountsSwiperView);
