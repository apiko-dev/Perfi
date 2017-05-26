import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import SwipeableViews from 'react-swipeable-views-native';
import { virtualize } from 'react-swipeable-views-utils';
import styles from '../../styles/SlidesWithTabsStyles';

const Slides = virtualize(SwipeableViews);

const SlidesWithTabs = (props) => {
  const {
    setNextSlide,
    setPrevSlide,
    onChangeSlide,
    slideRenderer,
    index,
  } = props;

  return (
    <View style={styles.rootStyle}>
      <View style={styles.tabsContainerStyle}>
        <Button
          buttonStyle={styles.tabStyle}
          title={`${index - 1}`}
          onPress={setPrevSlide}
        />
        <Button
          buttonStyle={styles.tabStyle}
          title={`${index}`}
        />
        <Button
          buttonStyle={styles.tabStyle}
          title={`${index + 1}`}
          onPress={setNextSlide}
        />
      </View>
      <Slides
        index={index}
        slideRenderer={slideRenderer}
        onChangeIndex={onChangeSlide}
      />
    </View>
  );
};

export default SlidesWithTabs;
