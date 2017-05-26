import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import SlidesWithTabs from './SlidesWithTabs';

const enhance = compose(
  withState('index', 'changeIndex', 0),
  withHandlers({
    setNextSlide: ({ index, changeIndex }) => () => changeIndex(index + 1),
    setPrevSlide: ({ index, changeIndex }) => () => changeIndex(index - 1),
    onChangeSlide: ({ changeIndex }) => index => changeIndex(index),
  }),
);

export default enhance(SlidesWithTabs);
