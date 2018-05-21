import React from 'react';
import T from 'prop-types';
import ActionButton from 'react-native-action-button';
import screens from '../../constants/screens';
import {
  ScreenWrapper,
  Subtitle,
  CategoriesList,
  SegmentedControl,
  TabContainer,
} from '../../components';
import { getParam } from '../../utils/navHelpers';
import { categoriesTypes as types } from '../../constants/categories';
import s from './styles';
import { colors } from '../../styles';


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

const tabs = [types.income, types.expense];

const Categories = ({
  navigation,
  incomeCategories,
  expenseCategories,
  selectedTabIndex,
  setSelectedTabIndex,
}) => {
  const onSelectCategory = getParam('onSelectCategory')(navigation) || goEditCategory(navigation);

  return (
    <ScreenWrapper style={s.container}>
      <Subtitle leftText="Categories" withLittlePadding />
      <SegmentedControl
        values={tabs}
        selectedIndex={selectedTabIndex}
        onTabPress={setSelectedTabIndex}
      />

      <TabContainer
        selectedTabIndex={selectedTabIndex}
        tabIndex={0}
        topOffset={90}
      >
        <CategoriesList
          categories={incomeCategories}
          onSelect={onSelectCategory}
        />
      </TabContainer>
      <TabContainer
        selectedTabIndex={selectedTabIndex}
        tabIndex={1} // eslint-disable-line
        topOffset={90}
      >
        <CategoriesList
          categories={expenseCategories}
          onSelect={onSelectCategory}
        />
      </TabContainer>

      <ActionButton
        buttonColor={colors.green}
        size={55}
        spacing={10}
        offsetX={15}
        offsetY={15}
        buttonText="+"
        onPress={goAddCategory(navigation)}
      />

    </ScreenWrapper>
  );
};

Categories.propTypes = {
  navigation: T.object,
  incomeCategories: T.array,
  expenseCategories: T.array,
  selectedTabIndex: T.number,
  setSelectedTabIndex: T.func,
};

export default Categories;
