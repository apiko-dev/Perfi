import React, { PropTypes } from 'react';
import { NavigationActions } from 'react-navigation';
import { CategoryForm, SceneContentWrapper } from '../components';

const CategoryEditor = ({ navigation }) => (
  <SceneContentWrapper>
    <CategoryForm
      onClose={() => navigation.dispatch(NavigationActions.back())}
    />
  </SceneContentWrapper>
);

CategoryEditor.propTypes = {
  navigation: PropTypes.object,
};

CategoryEditor.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.title,
});

export default CategoryEditor;
