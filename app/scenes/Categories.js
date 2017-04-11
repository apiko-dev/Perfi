import React, { PropTypes } from 'react';
import { Button, Platform, Text, View } from 'react-native';
import scenes from '../constants/scenes';
import { DrawerButton } from '../components';

const Categories = ({ navigation }) => (
  <View>
    <Text>Categories</Text>
    <Button
      title="Edit category"
      onPress={() => navigation.navigate(scenes.CategoryEditor, { title: 'Edit category' })}
    />
    <Button
      title="Add category"
      onPress={() => navigation.navigate(scenes.CategoryEditor, { title: 'Add category' })}
    />
  </View>
);

Categories.propTypes = {
  navigation: PropTypes.object,
};

Categories.navigationOptions = {
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: 'Categories',
    ...Platform.select({
      android: {
        left: <DrawerButton navigation={navigation} />,
      },
    }),
  }),
};

export default Categories;
