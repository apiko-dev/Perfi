import React, { PropTypes } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScreenWrapper } from '../../components';
import CategoryFormContainer from './categoryForm/CategoryFormContainer';
import DeleteCategoryButtonContainer from './screenHeader/DeleteCategoryButtonContainer';

const CategoryEditor = ({ navigation }) => (
  <ScreenWrapper>
    <CategoryFormContainer
      navigation={navigation}
      onClose={() => navigation.dispatch(NavigationActions.back())}
    />
  </ScreenWrapper>
);

CategoryEditor.propTypes = {
  navigation: PropTypes.object,
};

CategoryEditor.navigationOptions = ({ navigation }) => ({
  headerRight: <DeleteCategoryButtonContainer navigation={navigation} />,
});

export default CategoryEditor;
