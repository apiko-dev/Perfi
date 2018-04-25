import { connect } from 'react-redux';
import R from 'ramda';
import { compose, withProps, pure } from 'recompose';
import TransactionItem from './TransactionItem';
import { accountsOperations } from '../../../../modules/accounts';
import { colors } from '../../../../styles';


const mapStateToProps = ({ accounts, categories }) => ({
  accountsEntities: accounts.byId,
  categoriesEntities: categories.byId,
});

const enhance = compose(
  connect(mapStateToProps, accountsOperations),

  withProps(({ accountsEntities, accountId, categoriesEntities, categoryId }) => ({
    accountName: R.pathOr('Account deleted', [accountId, 'name'], accountsEntities),
    accountColor: R.pathOr(colors.greyDarker, [accountId, 'color'], accountsEntities),
    categoryIconName: R.pathOr('shopping', [categoryId, 'icon'], categoriesEntities),
    categoryName: R.pathOr('Other', [categoryId, 'name'], categoriesEntities),
  })),
);

export default enhance(pure(TransactionItem));
