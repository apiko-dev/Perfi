import React, { PropTypes } from 'react';
import { Alert, Platform, View } from 'react-native';
import screens from '../constants/screens';
import { DrawerButton, RoundButton } from '../components';
import { CategoriesListContainer } from '../containers';
import styles from '../styles/CategoriesStyles';

const Categories = ({ navigation }) => {
  const currentRoute = navigation.state.routeName;

  return (
    <View style={styles.rootStyle}>
      <CategoriesListContainer
        type={currentRoute.toLowerCase()}
        onSelectCategory={id => Alert.alert(id)}
      />
      <RoundButton
        style={styles.addButtonStyle}
        iconName="add"
        onPress={() => navigation.navigate(screens.CategoryEditor, { title: 'Add category' })}
      />
    </View>
  );
};

Categories.propTypes = {
  navigation: PropTypes.object,
};

Categories.navigationOptions = ({ navigation }) => ({
  title: 'Categories',
  ...Platform.select({
    android: {
      headerLeft: <DrawerButton navigation={navigation} />,
    },
  }),
});

export default Categories;
