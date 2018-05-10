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
import { withStyle } from '../../utils/enhancers';
import styles from './styles';
import { getParam } from '../../utils/navHelpers';
import { getAccounts } from '../../modules/accounts/selectors';
import { transactionsOperations } from '../../modules/transactions';
import { getExpenseCategory, getIncomeCategory } from '../../modules/categories/selectors';
import { colors } from '../../styles';
// import screens from '../../constants/screens';


const mapStateToProps = ({ accounts, categories }) => ({
  accounts: getAccounts(accounts),
  expenseCategories: getExpenseCategory(categories),
  incomeCategories: getIncomeCategory(categories),
});


const transactionProp = (propName, def) => R.pathOr(def, ['transaction', propName]);

const requiredProps = ['value', 'account', 'category', 'date'];

const isFieldsFilled = R.pipe(
  R.props,
  R.none(R.isNil),
);

const withSubmitState = withPropsOnChange(
  requiredProps,
  props => ({ isReadyForSubmit: isFieldsFilled(requiredProps, props) }),
);

const onUpdateNote = ({ updateNote }) => (text) => {
  updateNote(text);
};

const onSubmit = ({ submit, transaction, account, category, navigation, ...props }) => () => {
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
};

const enhance = compose(

  connect(mapStateToProps, transactionsOperations),

  withState('date', 'setDate', transactionProp('date', new Date())),
  withState('value', 'setValue', transactionProp('value', 0)),
  withState('isVisibleModal', 'setVisibleModal', false),


  lifecycle({
    componentDidMount() {
      this.props.setValue(getParam('value')(this.props.navigation));
    },
  }),


  withStyle(styles),

  withState('account', 'setAccount', transactionProp('account')),
  withState('category', 'setCategory', transactionProp('category')),
  withState('isSelectedCategory', 'setSelectedCategory', false),
  withState('note', 'updateNote', transactionProp('note')),
  withSubmitState,


  withProps(({ transaction, createTransaction, updateTransaction, category, account }) => ({
    submit: transaction ? updateTransaction : createTransaction,
    categoryName: R.pathOr('Category', ['name'], category),
    categoryIcon: {
      name: R.pathOr('', ['icon'], category),
      color: R.pathOr(colors.greyDarker, ['color'], account),
    },
  })),

  withHandlers({
    onUpdateNote,
    onSubmit,
    onToggleModal: ({ setVisibleModal, isVisibleModal }) => () => {
      setVisibleModal(!isVisibleModal);
    },
  }),

  withHandlers({

    onChangeAccount: ({ setAccount }) => (id, account) => {
      setAccount(account);
    },

    onChangeCategory: ({ setCategory, onToggleModal, setSelectedCategory }) => (category) => {
      onToggleModal();
      setCategory(category);
      setSelectedCategory(true);
    },

  }),
);

export default hoistStatics(enhance)(TransactionEditorScreenView);
