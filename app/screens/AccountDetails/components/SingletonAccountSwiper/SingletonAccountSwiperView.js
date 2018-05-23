import React from 'react';
import T from 'prop-types';
import Swiper from 'react-native-swiper';
import { View, Text } from 'react-native';
import s from './styles';


const AccauntsSwiper = ({ onIndexChanged, accounts, initialId }) => (
  <View style={s.wrapper}>
    <Swiper
      loop
      index={initialId}
      showsButtons
      buttonWrapperStyle={s.swiperButtons}
      showsPagination={false}
      onIndexChanged={onIndexChanged}
      nextButton={<Text style={s.buttonText}>›</Text>}
      prevButton={<Text style={s.buttonText}>‹</Text>}
    >
      {accounts.map(
          acc =>
            <View
              key={acc.id}
              style={[s.accountContainer, { backgroundColor: acc.color }]}
            >
              <Text style={s.balanceText}>${acc.balance}</Text>
              <View style={s.accountNameContainer}>
                <Text style={s.accountNameText}>{acc.name}</Text>
              </View>
            </View>
      )}
    </Swiper>
  </View>
  );

AccauntsSwiper.propTypes = {
  accounts: T.array,
  onIndexChanged: T.func,
  initialId: T.number,
};

export default AccauntsSwiper;
