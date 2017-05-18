import React, { PropTypes } from 'react';
import { Platform, Text, TouchableOpacity, TouchableNativeFeedback, View } from 'react-native';
import { Badge, Icon } from 'react-native-elements';
import R from 'ramda';
import { compose, withProps } from 'recompose';
import { withToggle } from '../../utils/enhancers';
import TransactionsList from './TransactionsList';
import colors from '../../constants/colors';
import styles from '../../styles/CategoryWithTransactionsStyles';

const getTransactionsSum = R.pipe(
  R.map(R.prop('value')),
  R.sum,
);

const CategoryIcon = compose(withProps({
  containerStyle: styles.iconContainerStyle,
  type: 'material-community',
  color: colors.secondaryText,
}))(Icon);

const Touchable = Platform.select({
  android: TouchableNativeFeedback,
  ios: TouchableOpacity,
});

const CategoryWithTransactions = (props) => {
  const { category, transactions, transactionsSum, onSelectTransaction, isOn, toggle } = props;

  return (
    <View style={styles.rootStyle}>
      <Touchable onPress={toggle}>
        <View style={styles.headerStyle}>
          <CategoryIcon name={`chevron-${isOn ? 'up' : 'down'}`} />
          <CategoryIcon name={category.icon} />
          <Text style={styles.titleStyle}>{category.name}</Text>
          <Badge
            containerStyle={styles.badgeContainerStyle}
            value={transactions.length}
          />
          <Text style={styles.leftTitleStyle}>{transactionsSum}</Text>
        </View>
      </Touchable>
      {isOn && (
        <TransactionsList
          transactions={transactions}
          onSelectTransaction={onSelectTransaction}
        />
      )}
    </View>
  );
};

CategoryWithTransactions.propTypes = {
  category: PropTypes.object,
  transactions: PropTypes.array,
  transactionsSum: PropTypes.number,
  onSelectTransaction: PropTypes.func,
  isOn: PropTypes.bool,
  toggle: PropTypes.func,
};

const withTransactionsSum = withProps(({ category, transactions }) => ({
  transactionsSum: getTransactionsSum(transactions) * (category.type === 'income' ? 1 : -1),
}));

export default compose(withTransactionsSum, withToggle)(CategoryWithTransactions);
