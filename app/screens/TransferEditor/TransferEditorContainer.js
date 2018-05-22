import {
  compose,
  hoistStatics,
  withHandlers,
  withPropsOnChange,
} from 'recompose';
import R from 'ramda';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import TransactionEditorScreenView from './TransferEditorScreenView';
import { getAccounts, getTotalBalance } from '../../modules/accounts/selectors';
import { transfersOperations } from '../../modules/transfers';
import { withSetter, checkReadyForSubmit } from '../../utils/enhancersForm';

// TODO: на андроїді не відображає рамки з тире

const fields = ['from', 'value', 'to', 'date', 'note'];
const msg = 'There is not enough money';

const checkValidValue = (value, { from: { balance} }) => ({
  isValid: Number(value) < Number(balance),
  message: `${msg}, available - ${balance}`,
});

const mapStateToProps = state => ({
  accountsArr: getAccounts(state),
  accounts: R.pathOr({}, ['accounts', 'byId'], state),
  totalBalance: getTotalBalance(state),
});

const enhance = compose(
  connect(mapStateToProps, transfersOperations),

  withSetter('from', {}, R.length),
  withSetter('value', '', checkValidValue, Number),
  withSetter('to', {}, R.length),
  withSetter('date', new Date()),
  withSetter('note', ''),

  withPropsOnChange(['from'], props => {
    if (!R.isEmpty(props.from)) props.onToggleValidValue(props.value);
  }),

  checkReadyForSubmit(fields),

  withHandlers({
    onSubmit: ({ createTransfer, navigation, ...props }) => () => {
      createTransfer({
        ...R.pick(fields, props),
        from: R.prop('id', props.from),
        to: R.prop('id', props.to),
      });

      navigation.dispatch(NavigationActions.back());
    },
  }),
);

export default hoistStatics(enhance)(TransactionEditorScreenView);
