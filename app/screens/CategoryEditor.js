import React, { PropTypes } from 'react';
import { Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { SceneContentWrapper, NavButton } from '../components';
import CategoryForm from '../containers/CategoryFormContainer';

const CategoryEditor = ({ navigation, updateCategory, createCategory }) => (
  <SceneContentWrapper>
    <CategoryForm
      category={navigation.state.params.category}
      navigation={navigation}
      updateCategory={updateCategory}
      createCategory={createCategory}
      onClose={() => navigation.dispatch(NavigationActions.back())}
    />
  </SceneContentWrapper>
);

CategoryEditor.propTypes = {
  navigation: PropTypes.object,
  updateCategory: PropTypes.func,
  createCategory: PropTypes.func,
};

CategoryEditor.navigationOptions = ({ navigation }) => {
  const { state: { params: { category, title, deleteCategory } } } = navigation;
  const action = () => deleteCategory(category.id);

  return ({
    title,
    ...Platform.select({
      android: {
        headerRight: <NavButton
          iconName="delete"
          iconType="material-community"
          navigation={navigation}
          action={action}
          isVisible={!!category}
          backOnSuccess
        />,
      },
    }),
  });
};

export default CategoryEditor;
