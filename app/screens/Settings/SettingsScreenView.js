import React from 'react';
import T from 'prop-types';
import { Text, View } from 'react-native';
import { Subtitle, Select, ScreenWrapper, Icon, Button } from '../../components';

import currencies from '../../constants/currencies';

import s from './styles';
import { dimensions } from '../../styles';


const Settings = ({
  currency,
  onChangeCurrency,
  onGenerateData,
}) => (
  <ScreenWrapper style={s.container}>
    <View>
      <Subtitle leftText="Choose a currency" />
      <Select
        isShowScroll={false}
        options={[currencies.dollar, currencies.euro, currencies.hryvnia]}
        containerStyle={s.selectorContainer}
        style={s.selector}
        defaultValue={currency}
        selectorsWidth={dimensions.containerWidth}
        onSelect={onChangeCurrency}
        textStyle={s.selectTextStyle}
        optionHeight={dimensions.verticalIndent * 2.8}
      />
      <View style={s.generateButtonContainer}>
        <Subtitle leftText="Generate test data" />
        <Button
          onPress={onGenerateData}
          title="Generate"
          titleStyle={s.generateButtonTitle}
          containerStyle={s.generateButton}
        />
      </View>
    </View>
    <View style={s.secondContainer}>
      <Text style={s.text}>Made with ❤️ by</Text>
      <Icon
        name="apikoLogo"
        width={80}
        height={24}
      />
    </View>

  </ScreenWrapper>
);

Settings.propTypes = {
  currency: T.object,
  onChangeCurrency: T.func,
  onGenerateData: T.func,
};


export default Settings;
