import React, { PropTypes } from 'react';
import { Alert, Platform, View } from 'react-native';
import screens from '../constants/screens';
import { DrawerButton } from '../components';
import { CategoriesListContainer } from '../containers';

const Categories = ({ navigation }) => {
  const currentRoute = navigation.state.routeName;

  return (
    <View>
      <CategoriesListContainer
        type={currentRoute.toLowerCase()}
        onSelectCategory={id => Alert.alert(id)}
      />
    </View>
  );
}

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
