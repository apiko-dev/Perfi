import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerView } from 'react-navigation';

const Drawer = (props) => {
  console.log({ props });


  return (
    <View style={styles.container}>
      <DrawerView.Items {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
  },
});

export default Drawer;
