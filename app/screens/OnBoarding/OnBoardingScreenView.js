import React from 'react';
import T from 'prop-types';
import { View, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';

import s from './styles';
import { Button } from '../../components';

const slides = [{
  source: require('../../assets/images/slide1.png'),
  text: 'Hold the keys of your spendings',
}, {
  source: require('../../assets/images/slide2.png'),
  text: 'Focus on your dreams, not cost-cutting',
}, {
  source: require('../../assets/images/slide3.png'),
  text: 'Give your finance a prosperous life',
}];


const OnBoarding = ({
   onSignIn,
}) => (
  <View style={s.root}>
    <Swiper
      style={s.container}
      dot={<View style={s.dot} />}
      activeDot={<View style={[s.dot, s.activeDot]} />}
      paginationStyle={s.paginationStyle}
      loop={false}
    >
      {slides.map(({ source, text }) => (
        <View style={s.slide} key={source}>
          <Image
            style={s.image}
            resizeMode="contain"
            source={source}
          />
          <Text style={s.text}>{text}</Text>
        </View>
      ))}
    </Swiper>
    <Button secondaryOpacity title="Get Started" onPress={onSignIn} />
  </View>
  );

OnBoarding.navigationOptions = ({
  header: null,
});

OnBoarding.propTypes = {
  onSignIn: T.func,
};

export default OnBoarding;
