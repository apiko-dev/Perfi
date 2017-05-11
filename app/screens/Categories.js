import React, { PropTypes } from 'react';
import { Alert, View } from 'react-native';
import screens from '../constants/screens';
import { RoundButton } from '../components';
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

Categories.navigationOptions = {
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: 'Categories',
  }),
};

Categories.propTypes = {
  navigation: PropTypes.object,
};

export default Categories;
