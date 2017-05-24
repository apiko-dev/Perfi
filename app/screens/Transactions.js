import R from 'ramda';
import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = (index) => <View style={[ styles.container, { backgroundColor: '#FFEB3B' } ]}>
  <Text>{index}</Text>
</View>;
// const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#FFC107' } ]} />;
// const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: '#FF9800' } ]} />;

export default class TabViewExample extends PureComponent {
  state = {
    index: 1,
    routes: [
      { key: '0', title: '0' },
      { key: '1', title: '1' },
      { key: '2', title: '2' },
    ],
  };

  _handleChangeTab = index => {
    const routes = this.state.routes;

    console.log({ index });

    this.setState({
      routes: index > 1
        ? R.map(route => ({ ...route, title: `${+route.title + 1}`}), routes)
        : R.map(route => ({ ...route, title: `${+route.title - 1}`}), routes),
    });
  };

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = ({ route: { title, boo } }) => {
    console.log({ boo });

    return FirstRoute(title);
  };

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
        lazy
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});