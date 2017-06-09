import React, { PropTypes } from 'react';
import screens from '../../constants/screens';
import { ActionButton, ScreenWrapper } from '../../components';
import { getParam } from '../../utils/navHelpers';
import CategoriesSlider from './categoriesSlider/CategoriesSlider';

const goEditCategory = navigation => (category) => {
  navigation.navigate(screens.CategoryEditor, {
    title: 'Edit category',
    category,
  });
};

const goAddCategory = navigation => () => {
  navigation.navigate(screens.CategoryEditor, {
    title: 'New category',
  });
};

const Categories = ({ navigation }) => {
  const onSelectCategory = getParam('onSelectCategory')(navigation) || goEditCategory(navigation);

  return (
    <ScreenWrapper>
      <CategoriesSlider onSelectCategory={onSelectCategory} />
      <ActionButton
        iconName="add"
        onPress={goAddCategory(navigation)}
      />
    </ScreenWrapper>
  );
};

Categories.propTypes = {
  navigation: PropTypes.object,
};

export default Categories;
