import { ListView } from 'react-native';
import { compose, withProps } from 'recompose';
import CategoryItem from './CategoryItem';

const withDataSource = withProps({
  ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
});

const withClonedDataSource = withProps(({ ds, categories }) => ({
  dataSource: ds.cloneWithRows(categories),
}));

const withCategoryItem = withProps(({ onSelectCategory }) => ({
  renderRow: compose(
    withProps(props => ({
      onPress: () => onSelectCategory(props),
    })),
  )(CategoryItem),
}));

const CategoriesList = compose(
  withDataSource,
  withClonedDataSource,
  withCategoryItem,
)(ListView);

export default CategoriesList;
