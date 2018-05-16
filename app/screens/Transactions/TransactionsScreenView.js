import React from 'react';
import T from 'prop-types';
import { View, FlatList, Text } from 'react-native';
import Svg from 'react-native-svg';
import { VictoryPie } from 'victory-native';

import ActionButton from 'react-native-action-button';
import screens from '../../constants/screens';
import { TransactionItem, AccauntsSwiper } from './components';
import {
  Subtitle,
  Separator,
  Select,
  Button,
  Calendar,
  NavIcon,
  TabContainer,
} from '../../components';
import s from './styles';
import { colors, dimensions, scalingUtils } from '../../styles';
import NavigationButton from '../../components/NavigationButton';
import { getParam } from '../../utils/navHelpers';


const Transactions = ({
    navigation,
    totalBalance,
    transactions,
    onDeleteTransaction,
    onAddTransactionToFavourite,
    onToggleCalendar,
    isVisibleCalendar,
    onChangeCalendar,
    isActiveCalendar,
    isActiveToday,
    isActiveYesterday,
    isActiveSelector,
    onSetActiveToday,
    onSetActiveYesterday,
    dateForFiltering,
    onChangeSelector,
    setListRef,
    selectedTabIndex,

    color,
  setColor,
    }) => {
  const _keyExtractor = item => item.id;


  /* eslint-disable react/prop-types */
  const _renderItem = ({ item }) => (
    <TransactionItem
      accountId={item.account}
      categoryId={item.category}
      date={item.date}
      value={item.value}
      onDelete={() => onDeleteTransaction(item.id)}
      onAddToFavourite={() => onAddTransactionToFavourite(item.id)}
    />
  );

  const data = [{
    name: 'Washington',
    population: 7694980,
  }, {
    name: 'Oregon',
    population: 2584160,
  }, {
    name: 'Minnesota',
    population: 6590667,
  }, {
    name: 'Alaska',
    population: 7284698,
  }];


  const options = {
    margin: {
      top: 20,
      left: 20,
      right: 20,
      bottom: 20,
    },
    width: 350,
    height: 350,
    color: '#2980B9',
    r: 50,
    R: 150,
    legendPosition: 'topLeft',
    animate: {
      type: 'oneByOne',
      duration: 200,
      fillTransition: 3,
    },
    label: {
      fontFamily: 'Arial',
      fontSize: 8,
      fontWeight: true,
      color: '#ECF0F1',
    },
  };

  return (
    <View style={s.root}>
      <Subtitle
        style={s.subtitle}
        leftText="Accounts"
        totalBalance={totalBalance}
      />
      <View style={{ paddingLeft: dimensions.halfIndent, paddingRight: dimensions.halfIndent }}>
        <AccauntsSwiper navigation={navigation} />
      </View>
      <Separator style={s.separator} />

      <View style={s.selectors}>
        <Select
          selectorsWidth={scalingUtils.moderateScale(100)}
          options={['Week', 'Month', 'Year']}
          style={s.dateSelector}
          defaultValue="Select"
          onSelect={onChangeSelector}
          isActiveSelector={isActiveSelector}
        />
        <Button
          title="Today"
          onPress={onSetActiveToday}
          titleStyle={s.btTitleStyle}
          containerStyle={s.btnContainer}
          isActive={isActiveToday}
          activeBackgroundColor={s.activeButtonBackgroundColor}
          activeColor={colors.white}

        />
        <Button
          title="Yesterday"
          onPress={onSetActiveYesterday}
          titleStyle={s.btTitleStyle}
          containerStyle={s.btnContainer}
          isActive={isActiveYesterday}
          activeBackgroundColor={s.activeButtonBackgroundColor}
          activeColor={colors.white}

        />
        <Calendar
          isVisible={isVisibleCalendar}
          isActiveIcon={isActiveCalendar}
          onToggleCalendar={onToggleCalendar}
          onSelectedDate={onChangeCalendar}
          initialDate={dateForFiltering}
        />
      </View>


      <TabContainer
        selectedTabIndex={selectedTabIndex}
        tabIndex={1}
        topOffset={250}
      >
        <Subtitle
          style={s.subtitle}
          leftText="Transaction"
          date={dateForFiltering}
        />

        <FlatList
          style={s.list}
          data={transactions}
          renderItem={_renderItem}
          keyExtractor={_keyExtractor}
          ListHeaderComponent={Separator}
          ItemSeparatorComponent={Separator}
          ListEmptyComponent={<Text style={s.emptyText}>{"You don't have any transaction"}</Text>}
          ListFooterComponent={
            transactions.length ? <View style={s.paddingBottom}><Separator /></View> : null
          }
          ref={setListRef}
        />

        <ActionButton
          buttonColor={colors.green}
          size={55}
          spacing={10}
          offsetX={15}
          offsetY={15}
          buttonText="+/-"
        >
          <ActionButton.Item
            buttonColor={colors.red}
            title="Add Expence"
            onPress={() => navigation.navigate(screens.Calculator, { type: 'expense' })}
            // onPress={() => navigation.navigate(screens.TransactionEditor)}
          >
            <NavIcon name="minus" tintColor={colors.white} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor={colors.green}
            title="Add Income"
            onPress={() => navigation.navigate(screens.Calculator, { type: 'income' })}
          >
            <NavIcon name="plus" tintColor={colors.white} />
          </ActionButton.Item>
        </ActionButton>

      </TabContainer>


      <TabContainer
        selectedTabIndex={selectedTabIndex}
        tabIndex={0}
        topOffset={250}
      >
        <View style={s.pieContainer}>
          <Svg height={300} width={300}>
          <VictoryPie
            standalone={false}
            width={300} height={300}
            innerRadius={74}
            labelRadius={120}
            // colorScale={['green', 'red', 'blue']}
            colorScale={[color, color, color]}
            padAngle={3}
            // date={data}

            events={[{
              target: 'data',
              eventHandlers: {
                onPress: (evt, context, index) => [
                  {
                    target: 'labels',
                    mutation: (props) => {
                      let st = '';
                      if (index == 0) {
                        st = '30%';
                        console.log("st = '30%';")
                        console.log('props', props)
                        setColor('white')

                        // this.setState({
                        //   pietext: 'Imran khan Rahat = 30%',
                        // });
                      } else if (index == 1) {
                        st = '30%';
                        console.log("st = '30% - 2';")
                        setColor('blue')

                        // this.setState({
                        //   pietext: 'Saha= 30%',
                        // });
                      } else {
                        st = '40%';
                        console.log("st = '40% - 2';")
                        setColor('yellow')

                        // this.setState({
                        //   pietext: 'Mohit = 30%',
                        // });
                      }

                      // return props.text === 'clicked' ? null : { text: st };
                      return {fill: "#252525",};
                      return {style: {fill: "#252525"}};
                    },
                  },
                ]

                  // alert(index);
                ,
              },
            }]}
            data={[
              { x: 1, y: 20, label: 'imran' },
              { x: 1, y: 10, label: 'imran' },
              { x: 1, y: 30, label: 'imran' },
              { x: 3, y: 40, label: 'mohit' },
            ]}

          />
          </Svg>
        </View>
      </TabContainer>
    </View>
  );
};


Transactions.propTypes = {
  navigation: T.object,
  totalBalance: T.number,
  transactions: T.array,
  onDeleteTransaction: T.func,
  onAddTransactionToFavourite: T.func,
  onToggleCalendar: T.func,
  isVisibleCalendar: T.bool,
  onChangeCalendar: T.func,
  isActiveCalendar: T.bool,
  isActiveToday: T.bool,
  isActiveYesterday: T.bool,
  isActiveSelector: T.bool,
  onSetActiveToday: T.func,
  onSetActiveYesterday: T.func,
  dateForFiltering: T.object,
  onChangeSelector: T.func,
  setListRef: T.func,
};

Transactions.navigationOptions = ({ navigation }) => ({
  headerRight: <NavigationButton
    iconName="pie-chart"
    name={getParam('isChartShown')(navigation) ? 'list' : 'pie-chart'}
    tintColor={colors.green}
    onPress={getParam('onToggleChart')(navigation)}
  />,
});

export default Transactions;
