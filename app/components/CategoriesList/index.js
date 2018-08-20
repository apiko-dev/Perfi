import React from 'react';
import T from 'prop-types';
import { View, FlatList, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { Text, Separator } from '../index';
import { CategoryItem } from './components';
import s from './styles';


const CategoriesList = ({
  categories,
  isVisible,
  onToggleModal,
  onSelect,
  isModal,
}) => {
  const _keyExtractor = item => item.id;

  /* eslint-disable react/prop-types */
  const _renderItem = ({ item }) => (
    <CategoryItem
      item={item}
      onSelect={onSelect}
    />
  );
  return isModal ?

    <View>
      <View style={s.calendarIcon}>
        <TouchableOpacity onPress={onToggleModal} />
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
            data={categories}
            renderItem={_renderItem}
            keyExtractor={_keyExtractor}
            ItemSeparatorComponent={Separator}
            ListFooterComponent={categories.length ? <Separator /> : null}
          />
        </View>
      </Modal>
    </View>

    :

    <View style={s.listContainer}>
      <Separator />
      <FlatList
        data={categories}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={categories.length ? <View style={s.footer}><Separator /></View> : null}
      />
    </View>;
};

CategoriesList.propTypes = {
  isModal: T.bool,
  isVisible: T.bool,
  onToggleModal: T.func,
  onSelect: T.func,
  categories: T.array,

};

export default CategoriesList;
