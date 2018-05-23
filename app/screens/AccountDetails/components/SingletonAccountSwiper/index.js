import { connect } from 'react-redux';
import R from 'ramda';
import { compose, withProps, withHandlers } from 'recompose';
import { setParam, getParam } from '../../../../utils/navHelpers';
import SingletonAccountSwiperView from './SingletonAccountSwiperView';
import { getAccounts } from '../../../../modules/accounts/selectors';


const mapStateToProps = (state) => ({
  accounts: getAccounts(state),
});
const enhance = compose(
  connect(mapStateToProps),
  withProps(props => ({
    onSelectAccount: setParam('account')(props.navigation),
    accountId: getParam('accountId')(props.navigation),
  })),
  withProps(props => ({
    initialId: R.findIndex(R.propEq('id', props.accountId))(props.accounts),
  })),
  withHandlers({
    onIndexChanged: props => index => props.onAccountChange(props.accounts[index].id),
  })
);

export default enhance(SingletonAccountSwiperView);
