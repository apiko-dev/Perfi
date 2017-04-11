import React from 'react';
import { Text, View } from 'react-native';

const CategoryEditor = () => (
  <View>
    <Text>Category Editor</Text>
  </View>
);

CategoryEditor.navigationOptions = {
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: navigation.state.params.title,
  }),
};

export default CategoryEditor;
