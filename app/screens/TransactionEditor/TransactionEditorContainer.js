import {
  compose,
  hoistStatics,
  withHandlers,
  withProps,
  withPropsOnChange,
  withState,
  lifecycle,
} from 'recompose';
import R from 'ramda';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import TransactionEditorScreenView from './TransactionEditorScreenView';
import { getParam } from '../../utils/navHelpers';
import { getAccounts } from '../../modules/accounts/selectors';
import { transactionsOperations } from '../../modules/transactions';
import { getExpenseCategory, getIncomeCategory } from '../../modules/categories/selectors';
import { colors } from '../../styles';
// import screens from '../../constants/screens';


const transactionProp = (propName, def) => R.pathOr(def, ['transaction', propName]);

const requiredProps = ['value', 'account', 'category', 'date'];

const isFieldsFilled = R.pipe(R.props, R.none(R.isNil));

const mapStateToProps = state => ({
  accounts: getAccounts(state),
  expenseCategories: getExpenseCategory(state.categories),
  incomeCategories: getIncomeCategory(state.categories),
});

const enhance = compose(

  connect(mapStateToProps, transactionsOperations),

  withState('date', 'setDate', transactionProp('date', new Date())),
  withState('value', 'setValue', transactionProp('value', 0)),
  withState('isVisibleModal', 'setVisibleModal', false),

  withState('account', 'setAccount', transactionProp('account')),
  withState('category', 'setCategory', transactionProp('category')),
  withState('isSelectedCategory', 'setSelectedCategory', false),
  withState('note', 'updateNote', transactionProp('note')),

  withPropsOnChange(
    requiredProps,
    props => ({ isReadyForSubmit: isFieldsFilled(requiredProps, props) }),
  ),


  withProps(({ transaction, createTransaction, updateTransaction, category, account }) => ({
    submit: transaction ? updateTransaction : createTransaction,
    categoryName: R.pathOr('Category', ['name'], category),
    categoryIcon: {
      name: R.pathOr('', ['icon'], category),
      color: R.pathOr(colors.greyDarker, ['color'], account),
    },
  })),

  withHandlers({
    onUpdateNote: ({ updateNote }) => (text) => { updateNote(text); },
    onChangeAccount: ({ setAccount }) => (id, account) => { setAccount(account); },
    onSubmit: ({ submit, transaction, account, category, navigation, ...props }) => () => {
      const editedProps = {
        ...R.pick(['value', 'date', 'note'], props),
        account: account && account.id,
        category: category && category.id,
      };
      const propsToSubmit = transaction ? { id: transaction.id, ...editedProps } : editedProps;

      submit(propsToSubmit);

      // navigation.dispatch(NavigationActions.reset({
      //   index: 0,
      //   actions: [
      //     NavigationActions.navigate({
      //       routeName: screens.Transactions,
      //     }),
      //   ],
      // }));

      navigation.dispatch(NavigationActions.back());
      navigation.dispatch(NavigationActions.back());
    },
    onToggleModal: ({ setVisibleModal, isVisibleModal }) => () => {
      setVisibleModal(!isVisibleModal);
    },
  }),

  withHandlers({
    onChangeCategory: ({ setCategory, onToggleModal, setSelectedCategory }) => (category) => {
      onToggleModal();
      setCategory(category);
      setSelectedCategory(true);
    },
  }),

  lifecycle({
    componentDidMount() {
      this.props.setValue(getParam('value')(this.props.navigation));
    },
  }),
);

export default hoistStatics(enhance)(TransactionEditorScreenView);
