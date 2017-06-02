import React from 'react';
import { compose, withHandlers, withProps, withState } from 'recompose';
import R from 'ramda';
import SlidesWithTabs from './SlidesWithTabs';

const ifFunc = (fn, value, def) => R.is(Function, fn) ? fn(value) : def;

const enhance = compose(
  withState('index', 'changeIndex', 0),
  withProps(({ title, index }) => ({
    prevSlideTitle: ifFunc(title, index - 1, 'PREV'),
    currentSlideTitle: ifFunc(title, index, 'CURRENT'),
    nextSlideTitle: ifFunc(title, index + 1, 'NEXT'),
  })),
  withHandlers({
    setNextSlide: ({ index, changeIndex }) => () => changeIndex(index + 1),
    setPrevSlide: ({ index, changeIndex }) => () => changeIndex(index - 1),
    onChangeSlide: ({ changeIndex }) => index => changeIndex(index),
  }),
);

export default enhance(SlidesWithTabs);
