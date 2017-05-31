import React from 'react';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { compose, withProps, withState, withHandlers } from 'recompose';
import { categoriesTypes as types } from '../../constants/categories';
import CategoriesListContainer from './categoriesList/CategoriesListContainer';

const route = key => ({ key, title: key.toUpperCase() });

const initNavigationState = {
  index: 0,
  routes: [
    route(types.income),
    route(types.expense),
  ],
};

const renderHeader = props => <TabBar {...props} />;

const Categories = (type, onSelectCategory) => () => (
  <CategoriesListContainer
    type={type}
    onSelectCategory={onSelectCategory}
  />
);

const renderScene = onSelectCategory => SceneMap({
  [types.income]: Categories(types.income, onSelectCategory),
  [types.expense]: Categories(types.expense, onSelectCategory),
});

const onRequestChangeTab = ({ navigationState, setNavigationState }) => (index) => {
  setNavigationState({ ...navigationState, index });
};

const enhance = compose(
  withState('navigationState', 'setNavigationState', initNavigationState),
  withProps({ renderHeader }),
  withProps(({ onSelectCategory }) => ({
    renderScene: renderScene(onSelectCategory),
  })),
  withHandlers({ onRequestChangeTab }),
);

export default enhance(TabViewAnimated);
