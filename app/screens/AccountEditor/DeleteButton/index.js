import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { getParam } from '../../../utils/navHelpers';
import { NavigationButton } from '../../../components';
import { accountsOperations } from '../../../modules/accounts';


const enhance = compose(
  connect(null, accountsOperations),
  withProps(({ navigation, deleteAccount }) => {
    const account = getParam('account')(navigation);

    return {
      account,
      title: 'Delete',
      backOnSuccess: true,
      isVisible: !!account,
      onPress: () => deleteAccount(account.id),
    };
  }),
);

export default enhance(NavigationButton);
