import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';

import {
  ScreenWrapper,
  HeaderTitle,
  Button,
  CategoryIcon,
  Value,
  Separator,
} from '../../components';
import s from './styles';
import { getParam } from '../../utils/navHelpers';
import { dimensions, colors } from '../../styles';
import { dateWithTime } from '../../utils/dateHelpers';
import fontSizes from '../../styles/fontSizes';

const TransferDetail = ({
 account,
 category,
 transaction,
}) => (
  <View style={s.root}>
    <View style={[s.iconContainer, { backgroundColor: account.color }]}>
      <CategoryIcon
        size={dimensions.iconSize * 1.5}
        tintColor={colors.white}
        name={category.icon}
      />
    </View>
    <ScreenWrapper style={s.withoutPadding}>
      <View style={s.container}>
        <View style={s.mainContentContainer}>
          <Text style={s.title}>{category.name}</Text>
          <Text style={s.accountName}>{account.name}</Text>
          <Text style={s.regular}>{dateWithTime(transaction.date)}</Text>
        </View>
        <Value size={fontSizes.big} value={transaction.value} />
      </View>
      <Separator />
      {
        transaction.note && (
          <View style={s.secondContainer}>
            <Text style={s.secondTitle}>Notes</Text>
            <Text style={s.regular}>{transaction.note}</Text>
          </View>
        )
      }
    </ScreenWrapper>
  </View>
);

TransferDetail.navigationOptions = ({ navigation }) => ({
  headerTitle: <HeaderTitle title="Income detail" />,
  headerRight:
  <Button
    titleStyle={s.headerRight}
    containerStyle={s.headerContainerRight}
    title="Edit"
    onPress={() => console.log('Edit', getParam('id')(navigation))}
  />,
});

TransferDetail.propTypes = {
  account: T.object,
  category: T.object,
  transaction: T.object,
};

export default TransferDetail;
