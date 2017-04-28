import React, { PropTypes } from 'react';
import { View, ListView, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import Modal from 'react-native-modal';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../styles/IconsPickerStyles';
import icons from '../constants/accountIcons';

const chunkedIconsList = _.chunk(icons, 4);
const { iconContainerStyle, pickedItemStyle, rowStyle, modalStyle, listStyle } = styles;

const IconsPickerModal = ({ isVisible, onIconPick, hideModal, selectedIconName }) => {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
  });

  const dataSource = ds.cloneWithRows(chunkedIconsList);

  const renderRow = row => (<View style={rowStyle}>
    { row.map((name) => {
      const iconStyle = selectedIconName === name ?
        [iconContainerStyle, pickedItemStyle] :
        iconContainerStyle;

      return (<TouchableOpacity
        key={name}
        style={iconStyle}
        onPress={() => onIconPick(name)}
      >
        <MaterialIcons
          name={name}
          size={26}
        />
      </TouchableOpacity>);
    }) }
  </View>);

  return (
    <Modal isVisible={isVisible} onBackButtonPress={hideModal} style={modalStyle}>
      <ListView
        style={listStyle}
        dataSource={dataSource}
        renderRow={renderRow}
        enableEmptySections
      />
    </Modal>
  );
};

IconsPickerModal.propTypes = {
  isVisible: PropTypes.bool,
  onIconPick: PropTypes.func,
  selectedIconName: PropTypes.string,
  hideModal: PropTypes.func,
};

export default IconsPickerModal;
