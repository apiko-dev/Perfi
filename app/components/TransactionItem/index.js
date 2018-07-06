import { connect } from 'react-redux';
import R from 'ramda';
import { compose, withProps, pure } from 'recompose';
import TransactionItem from './TransactionItem';
import { accountsOperations } from '../../modules/accounts/index';
import { colors } from '../../styles/index';

const mapStateToProps = ({ accounts, categories }) => ({
  accountsEntities: accounts.byId,
  categoriesEntities: categories.byId,
});

const enhance = compose(
  connect(mapStateToProps, accountsOperations),

  withProps(({ entity, accountsEntities, categoriesEntities }) => ({
    accountName: R.pathOr('Account deleted', [entity.account, 'name'], accountsEntities),
    isTransfer: !!entity.from,
    fromName: R.pathOr('', [entity.from, 'name'], accountsEntities),
    toName: R.pathOr('', [entity.to, 'name'], accountsEntities),
    accountColor: R.pathOr(colors.greyDarker, [entity.account, 'color'], accountsEntities),
    categoryIconName: R.pathOr('shopping', [entity.category
      ? entity.category
      : entity.id,
      'icon'], categoriesEntities),
    categoryName: R.pathOr('Other', [entity.category, 'name'], categoriesEntities),
  })),
  pure,
);

export default enhance(TransactionItem);
