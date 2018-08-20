import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';

import {
  ScreenWrapper,
  HeaderTitle,
  CategoryIcon,
  Value,
  Separator,
} from '../../components';
import s from './styles';
import { dimensions, colors } from '../../styles';
import { dateWithTime } from '../../utils/dateHelpers';

const TransferDetail = ({
  fromName,
  toName,
  transfer,
}) => (
  <View style={s.root}>
    <View style={[s.iconContainer, { backgroundColor: colors.green }]}>
      <CategoryIcon
        size={dimensions.iconSize * 1.5}
        tintColor={colors.white}
        name="shuffle-disabled"
      />
    </View>
    <ScreenWrapper style={s.withoutPaddingBottom}>
      <View style={s.container}>
        <View style={s.mainContentContainer}>
          <Text style={s.title}>Transfer</Text>
          <Text style={s.accountName}>{`Transfer money from ${fromName} to ${toName}`}</Text>
          <Text style={s.regular}>{dateWithTime(transfer.date)}</Text>
        </View>
        <Value style={s.value} value={transfer.value} isTransfer />
      </View>
      <Separator />
      {
        transfer.note && (
          <View style={s.secondContainer}>
            <Text style={s.secondTitle}>Notes</Text>
            <Text style={s.regular}>{transfer.note}</Text>
          </View>
        )
      }
    </ScreenWrapper>
  </View>
);

TransferDetail.navigationOptions = {
  headerTitle: <HeaderTitle title="Transfer detail" />,
};

TransferDetail.propTypes = {
  fromName: T.string,
  toName: T.string,
  transfer: T.object,
};

export default TransferDetail;
