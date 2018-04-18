import { compose, withProps } from 'recompose';
import { getParam } from '../../../utils/navHelpers';
import { NavButton } from '../../../components';

const enhance = compose(
  withProps(({ navigation, deleteAccount }) => {
    const account = getParam('account')(navigation);

    return {
      account,
      iconName: 'delete',
      backOnSuccess: true,
      isVisible: !!account,
      action: () => deleteAccount(account.id),
    };
  }),
);

export default enhance(NavButton);
