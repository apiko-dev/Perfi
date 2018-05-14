import {
  compose,
  withState,
  hoistStatics,
} from 'recompose';
import { connect } from 'react-redux';
import CategoriesScreenView from './CategoriesScreenView';
import { transactionsOperations } from '../../modules/transactions';
import { getExpenseCategory, getIncomeCategory } from '../../modules/categories/selectors';


const mapStateToProps = state => ({
  expenseCategories: getExpenseCategory(state.categories),
  incomeCategories: getIncomeCategory(state.categories),
});

const enhance = compose(
  connect(mapStateToProps, transactionsOperations),
  withState('selectedTabIndex', 'setSelectedTabIndex', 0),
);


export default hoistStatics(enhance)(CategoriesScreenView);
