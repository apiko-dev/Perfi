import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { getParam } from '../../../utils/navHelpers';
import { NavigationButton } from '../../../components';
import { categoriesOperations } from '../../../modules/categories';

const enhance = compose(
  connect(null, categoriesOperations),
  withProps(({ navigation, deleteCategory }) => {
    const category = getParam('category')(navigation);

    return {
      category,
      title: 'Delete',
      backOnSuccess: true,
      isVisible: !!category,
      onPress: () => deleteCategory(category.id),
    };
  }),
);

export default enhance(NavigationButton);
