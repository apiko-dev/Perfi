import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { SlidesWithTabs } from '../components';

import moment from 'moment';

const mod = (n, m) => {
  const q = n % m;
  return q < 0 ? (q + m) : q;
};


const styles = StyleSheet.create({
  slide: {
    flex: 1,
    padding: 15,
    // height: 100,
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

const getDate = index => moment().add(index, 'days').format('L');

function slideRenderer(params) {
  const {
    index,
    key,
  } = params;
  let style;

  switch (mod (index, 3)) {
    case 0:
      style = styles.slide1;
      break;

    case 1:
      style = styles.slide2;
      break;

    case 2:
      style = styles.slide3;
      break;

    default:
      break;
  }

  return (
    <View style={[styles.slide, style]} key={key}>
      <Text style={styles.text}>
        {getDate(index)}
      </Text>
    </View>
  );
}

const Demo = () => (
  <SlidesWithTabs slideRenderer={slideRenderer} setTitle={getDate} />
);

export default Demo;
