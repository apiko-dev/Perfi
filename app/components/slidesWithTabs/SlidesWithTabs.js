import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import SwipeableViews from 'react-swipeable-views-native';
import { virtualize } from 'react-swipeable-views-utils';
import colors from '../../styles/colors';
import styles from './SlidesWithTabsStyles';

const Slides = virtualize(SwipeableViews);

const SlidesWithTabs = (props) => {
  const {
    index,
    slideRenderer,
    prevSlideTitle,
    currentSlideTitle,
    nextSlideTitle,
    setPrevSlide,
    setNextSlide,
    onChangeSlide,
  } = props;

  return (
    <View style={styles.rootStyle}>
      <View style={styles.tabsContainerStyle}>
        <Button
          buttonStyle={styles.tabStyle}
          title={prevSlideTitle}
          color={colors.lightPrimary}
          onPress={setPrevSlide}
        />
        <Button
          buttonStyle={[styles.tabStyle, styles.currentTabStyle]}
          title={currentSlideTitle}
        />
        <Button
          buttonStyle={styles.tabStyle}
          title={nextSlideTitle}
          color={colors.lightPrimary}
          onPress={setNextSlide}
        />
      </View>
      <Slides
        index={index}
        slideRenderer={slideRenderer}
        onChangeIndex={onChangeSlide}
        overscanSlideAfter={1}
        overscanSlideBefore={1}
      />
    </View>
  );
};

SlidesWithTabs.propTypes = {
  index: PropTypes.number,
  slideRenderer: PropTypes.func,
  prevSlideTitle: PropTypes.string,
  currentSlideTitle: PropTypes.string,
  nextSlideTitle: PropTypes.string,
  setPrevSlide: PropTypes.func,
  setNextSlide: PropTypes.func,
  onChangeSlide: PropTypes.func,
};

export default SlidesWithTabs;
