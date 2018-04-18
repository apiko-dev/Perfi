import React from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { ScreenWrapper } from '../../components';
import CategoryFormContainer from './categoryForm/CategoryFormContainer';
import DeleteCategoryButtonContainer from './screenHeader/DeleteCategoryButtonContainer';
import { getParam } from '../../utils/navHelpers';

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
  title: getParam('title')(navigation),
  headerRight: <DeleteCategoryButtonContainer navigation={navigation} />,
});

export default CategoryEditor;
