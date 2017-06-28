import { ListView } from 'react-native';
import { compose, withProps } from 'recompose';

const withDataSource = withProps({
  ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
});

const withClonedDataSource = sourceName => withProps(({ ds, [sourceName]: source }) => ({
  dataSource: ds.cloneWithRows(source),
}));

export default sourceName => compose(
  withDataSource,
  withClonedDataSource(sourceName),
);
