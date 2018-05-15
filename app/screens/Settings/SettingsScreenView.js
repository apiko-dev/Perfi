import React from 'react';
import T from 'prop-types';
import { Text, View } from 'react-native';
import { Subtitle, Select, ScreenWrapper, Icon } from '../../components';

import currencies from '../../constants/currencies';

import s from './styles';
import { dimensions } from '../../styles';


const Settings = ({
  currency,
  onChangeCurrency,
}) => (
  <ScreenWrapper style={s.container}>
    <View>
      {console.log('currency', currency)}
      <Subtitle leftText="Settings" />
      <Select
        options={[currencies.dollar, currencies.euro, currencies.hryvnia]}
        containerStyle={s.selectorContainer}
        style={s.selector}
        defaultValue={currency}
        selectorsWidth={dimensions.containerWidth}
        onSelect={onChangeCurrency}
        textStyle={s.selectTextStyle}
        optionHeight={dimensions.verticalIndent * 2.8}
      />
    </View>
    <View style={s.secondContainer}>
      <Text style={s.text}>Made by</Text>
      <Icon
        name="apikoLogo"
        width={80}
        height={24}
      />
      <Text style={s.text}>with love</Text>
    </View>

  </ScreenWrapper>
);

Settings.propTypes = {
  currency: T.object,
  onChangeCurrency: T.func,
};


export default Settings;
