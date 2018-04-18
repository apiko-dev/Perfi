import R from 'ramda';
import { ListView } from 'react-native';
import { compose, withProps } from 'recompose';
import IconsPickerListRow from './IconsPickerListRow';

const withDataSource = withProps({
  removeClippedSubviews: false,
  ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
});

const withClonedDataSource = withProps(({ ds, icons }) => ({
  dataSource: ds.cloneWithRows(R.splitEvery(4, icons)),
}));

const withIconsItemsRow = withProps(({ selectedIconName, onIconPick }) => ({
  renderRow: compose(
    withProps(row => ({
      selectedIconName,
      onIconPick,
      row,
    })),
  )(IconsPickerListRow),
}));

export default compose(
  withDataSource,
  withClonedDataSource,
  withIconsItemsRow,
)(ListView);
