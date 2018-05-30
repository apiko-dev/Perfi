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

const requiredProps = ['value', 'account', 'category', 'date'];

const isFieldsFilled = R.pipe(R.props, R.none(R.isNil));

const mapStateToProps = (state, { navigation }) => ({
  accounts: getAccounts(state),
  accountsById: state.accounts.byId,
  categoriesById: state.categories.byId,
  expenseCategories: getExpenseCategory(state.categories),
  incomeCategories: getIncomeCategory(state.categories),
  transaction: R.pathOr(null, ['transactions', 'byId', getParam('id')(navigation)], state),
});

const enhance = compose(

  connect(mapStateToProps, transactionsOperations),

  withState('date', 'setDate', new Date()),
  withState('value', 'setValue', 0),
  withState('isIncome', 'setIsIncome', true),
  withState('isVisibleModal', 'setVisibleModal', false),

  withState('account', 'setAccount', {}),
  withState('category', 'setCategory', ''),
  withState('isSelectedCategory', 'setSelectedCategory', false),
  withState('note', 'updateNote', ''),

  withPropsOnChange(
    requiredProps,
    props => ({ isReadyForSubmit: isFieldsFilled(requiredProps, props) }),
  ),


  withProps(({
    transaction, createTransaction, updateTransaction, category, account,
  }) => ({
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
    onSubmit: ({
      submit, transaction, account, category, navigation, ...props
    }) => () => {
      let editedProps = {
        ...R.pick(['value', 'date', 'note'], props),
        account: account && account.id,
        category: category && category.id,
      };

      if (transaction) editedProps = { id: transaction.id, ...editedProps };

      submit(editedProps);

      navigation.dispatch(NavigationActions.back());
      navigation.dispatch(NavigationActions.back());

      // navigation.dispatch({ type: types.RESET_TO_TRANSACTION});
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
      const {
        navigation,
        setValue,
        setDate,
        setAccount,
        setCategory,
        updateNote,
        transaction,
        accountsById,
        categoriesById,
        setSelectedCategory,
        setIsIncome,
      } = this.props;

      console.log('getParam(\'value\')(navigation)', getParam('value')(navigation));
      setValue(Number(getParam('value')(navigation)));
      setIsIncome(getParam('isIncome')(navigation));

      if (transaction) {
        const { date, account, category, note } = transaction;

        setDate(date);
        setAccount(accountsById[account]);
        setCategory(categoriesById[category]);
        setSelectedCategory(true);
        updateNote(note);
      }
    },
  }),
);

export default hoistStatics(enhance)(TransactionEditorScreenView);
