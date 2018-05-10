import React from 'react';
import T from 'prop-types';
import { View, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { Text, TouchableItem, Separator } from '../../../../components';
import { CategoryItem } from './components';
import s from './styles';


const CategoryList = ({
    categories,
    isVisible,
    onToggleModal,
    onSelect,
  }) => {
  const _keyExtractor = item => item.id;


  /* eslint-disable react/prop-types */
  const _renderItem = ({ item }) => (
    <CategoryItem
      item={item}
      onSelect={onSelect}
    />
  );
  return (
    <View>
      <View style={s.calendarIcon}>
        <TouchableItem onPress={onToggleModal} />
      </View>

      <Modal
        style={s.modal}
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={isVisible}
        onBackdropPress={onToggleModal}
      >
        <View style={s.container}>
          <View>
            <Text style={s.headerText}>Choose category</Text>
            <Separator />
          </View>
          <FlatList
            style={s.list}
            data={categories}
            renderItem={_renderItem}
            keyExtractor={_keyExtractor}
            ItemSeparatorComponent={Separator}
            ListFooterComponent={categories.length ? <Separator /> : null}
          />
        </View>
      </Modal>
    </View>
  );
};

CategoryList.propTypes = {
  isVisible: T.bool,
  onToggleModal: T.func,
  onSelect: T.func,
  categories: T.array,

};

export default CategoryList;
