import React, { PropTypes } from 'react';
import { compose, withProps } from 'recompose';
import { List } from 'react-native-elements';
import CategoryItem from './CategoryItem';
import styles from '../../styles/CategoriesListStyles';

const CategoriesList = ({ categories, onSelectCategory }) => {
  const renderCategoryItem = compose(
    withProps(({ id }) => ({
      key: id,
      onPress: () => onSelectCategory(id),
    })),
  )(CategoryItem);

  return (
    <List containerStyle={styles.rootStyle}>
      {categories.map(renderCategoryItem)}
    </List>
  );
};

CategoriesList.propTypes = {
  categories: PropTypes.array,
  onSelectCategory: PropTypes.func,
};

export default CategoriesList;
