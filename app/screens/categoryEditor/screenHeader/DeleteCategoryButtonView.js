import { compose, withProps } from 'recompose';
import { getParam } from '../../../utils/navHelpers';
import { NavButton } from '../../../components';

const enhance = compose(
  withProps(({ navigation, deleteCategory }) => {
    const category = getParam('category')(navigation);

    return {
      category,
      iconName: 'delete',
      backOnSuccess: true,
      isVisible: !!category,
      action: () => deleteCategory(category.id),
    };
  }),
);

export default enhance(NavButton);
