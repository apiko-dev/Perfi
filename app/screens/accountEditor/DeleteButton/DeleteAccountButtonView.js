import { compose, withProps } from 'recompose';
import { getParam } from '../../../utils/navHelpers';
import { HeaderTextButton } from '../../../components';

const enhance = compose(
  withProps(({ navigation, deleteAccount }) => {
    const account = getParam('account')(navigation);

    return {
      account,
      title: 'Delete',
      backOnSuccess: true,
      isVisible: !!account,
      action: () => deleteAccount(account.id),
    };
  }),
);

export default enhance(HeaderTextButton);
