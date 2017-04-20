import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import IconsPickerModal from '../components/IconsPickerModal';

const AccountEditor = ({ navigation, account }) => {
  const { id, onSubmit, onDataChange } = navigation.state.params;
  const { icon, date, currency, initialBalance, isValid, isPickerVisible } = account;

  return (
    <View>
      <View>
        <MaterialIcons name={icon} size={32} />
        <IconsPickerModal isVisible onIconPick={(name) => onDataChange({ icon: name })} />
      </View>
    </View>
  );
};

AccountEditor.propTypes = {
  navigation: PropTypes.object,
};

AccountEditor.navigationOptions = {
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: navigation.state.params.title,
  }),
};

const mapStateToProps = (state, props) => {
  const accountId = props.navigation.state.params.id;

  if (accountId) {
    const account = state.accounts.filter(({ id }) => id === accountId)[0];

    return {
      account,
    };
  }

  return {
    account: state.account,
  };
};

export default connect(mapStateToProps)(AccountEditor);
