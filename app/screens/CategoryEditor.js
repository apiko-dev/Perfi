import React from 'react';
import { Text, View } from 'react-native';

const CategoryEditor = () => (
  <View>
    <Text>Category Editor</Text>
  </View>
);

CategoryEditor.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.title,
});

export default CategoryEditor;
