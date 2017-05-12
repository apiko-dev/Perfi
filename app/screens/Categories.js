import React, { PropTypes } from 'react';
import { View } from 'react-native';
import screens from '../constants/screens';
import { RoundButton } from '../components';
import { CategoriesListContainer } from '../containers';
import styles from '../styles/CategoriesStyles';

const goToEditor = (navigation, params) => (category) => {
  const isProxy = category && category.target;

  navigation.navigate(screens.CategoryEditor, isProxy ? params : { ...params, category });
};

const Categories = ({ navigation }) => {
  const { state: { routeName, params } } = navigation;
  const goAddCategory = goToEditor(navigation, { title: 'Add category' });
  const goEditCategory = goToEditor(navigation, { title: 'Edit category' });
  const onSelectCategory = (params && params.onSelectCategory) || goEditCategory;

  return (
    <View style={styles.rootStyle}>
      <CategoriesListContainer
        type={routeName.toLowerCase()}
        onSelectCategory={onSelectCategory}
      />
      <RoundButton
        style={styles.addButtonStyle}
        iconName="add"
        onPress={goAddCategory}
      />
    </View>
  );
};

Categories.propTypes = {
  navigation: PropTypes.object,
};

export default Categories;
