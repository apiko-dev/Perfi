import React, { Fragment } from 'react';
import T from 'prop-types';
import { ScrollView } from 'react-native';
import { Select } from '../../components';
import { SettingItem } from './components';

import currencies from '../../constants/currencies';
import { dateWithDots } from '../../utils/dateHelpers';

import s from './styles';
import { dimensions } from '../../styles';


const Settings = ({
  currency,
  onChangeCurrency,
  onGenerateData,
  onResetData,
  onSingInWithGoogle,
  onCreateBackup,
  onSynchronize,
  onLogOut,
  userName,
  isAuthorized,
  isLoadingBackup,
  isLoadingSynch,
  lastSynchDate,
  lastBackupDate,
  onApiko,
}) => (
  <ScrollView style={s.root}>

    <Select
      isShowScroll={false}
      options={[currencies.dollar, currencies.euro, currencies.hryvnia]}
      containerStyle={s.selectorContainer}
      style={s.selector}
      defaultValue={currency}
      selectorsWidth={dimensions.containerWidth}
      onSelect={onChangeCurrency}
      textStyle={s.selectText}
      secondInputContainer={s.selectSecondInputContainer}
      selectedSecondInputContainer={s.selectSelectedSecondInputContainer}
      optionHeight={dimensions.verticalIndent * 2.8}
    />

    {isAuthorized ?
      <SettingItem
        title="Account registered"
        value={userName}
      />
        :
      <SettingItem
        title="Register account via Google"
        onPress={onSingInWithGoogle}
      />
      }
    {isAuthorized &&
    <Fragment>
      <SettingItem
        isLoading={isLoadingSynch}
        title="Synchronize data"
        value={lastSynchDate
          ? `Last synchronization: ${dateWithDots(lastSynchDate)}`
          : ''}
        onPress={onSynchronize}
      />
      <SettingItem
        isLoading={isLoadingBackup}
        title="Do backup"
        value={lastBackupDate
          ? `Last backup: ${dateWithDots(lastBackupDate)}`
          : 'Data from your device will be saved to the server'
        }
        onPress={onCreateBackup}
      />
    </Fragment>
      }

    <SettingItem
      title="Generate data"
      value="Generate random data to show application features"
      onPress={onGenerateData}
    />

    <SettingItem
      title="Reset data"
      value="Reset all data from device (backup will be saved)"
      onPress={onResetData}
    />

    <SettingItem
      title="Made with ❤️ by Apiko"
      onPress={onApiko}
    />

    {isAuthorized &&
    <SettingItem
      title="Log out"
      onPress={onLogOut}
    />
    }

  </ScrollView>
);

Settings.propTypes = {
  currency: T.object,
  onChangeCurrency: T.func,
  onGenerateData: T.func,
  onResetData: T.func,
  onSingInWithGoogle: T.func,
  onCreateBackup: T.func,
  onSynchronize: T.func,
  onLogOut: T.func,
  userName: T.string,
  isAuthorized: T.bool,
  isLoadingBackup: T.bool,
  isLoadingSynch: T.bool,
  lastSynchDate: T.any,
  lastBackupDate: T.any,
  onApiko: T.func,
};


export default Settings;
