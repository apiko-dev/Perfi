import { compose, withProps } from 'recompose';
import { getParam } from '../../../utils/navHelpers';
import { NavigationButton } from '../../../components';

const enhance = compose(
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
