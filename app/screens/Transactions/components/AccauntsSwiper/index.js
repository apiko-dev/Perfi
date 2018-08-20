import { connect } from 'react-redux';
import { compose, withProps, withHandlers } from 'recompose';
import AccountsSwiperView from './AccountsSwiperView';
import { getAccounts } from '../../../../modules/accounts/selectors';
import screens from '../../../../constants/screens';


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
    groupedAccounts: splitTo(props.accounts),
  })),

  withHandlers({
    onAccountPress: props => id =>
      props.navigation.navigate(screens.AccountDetail, { accountId: id }),
  })
);

export default enhance(AccountsSwiperView);
