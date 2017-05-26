import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import SwipeableViews from 'react-swipeable-views-native';
import { virtualize } from 'react-swipeable-views-utils';
import styles from '../../styles/SlidesWithTabsStyles';

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
          onPress={setPrevSlide}
        />
        <Button
          buttonStyle={styles.tabStyle}
          title={currentSlideTitle}
        />
        <Button
          buttonStyle={styles.tabStyle}
          title={nextSlideTitle}
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

export default SlidesWithTabs;
