import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { setParam } from '../../../../utils/navHelpers';
import AccountsSwiperView from './AccountsSwiperView';
import { getAccounts } from '../../../../modules/accounts/selectors';


const splitTo = (arr, n = 3) => arr.reduce((accumulator, currentValue, currentIndex) => {
  if (currentIndex % n === 0) accumulator.push([]);
  accumulator[accumulator.length - 1].push(currentValue);
  return accumulator;
}, []);


const mapStateToProps = state => ({
  accounts: getAccounts(state),
});
const enhance = compose(
  connect(mapStateToProps),
  withProps(props => ({
    onSelectAccount: setParam('account')(props.navigation),
    groupedAccounts: splitTo(props.accounts),
  })),
);

export default enhance(AccountsSwiperView);
