import React from 'react';
import T from 'prop-types';
import { Platform, StyleSheet, View } from 'react-native';
import CategoryIcon from '../CategoryIcon';
import TouchableItem from '../TouchableItem';
import { colors, dimensions } from '../../styles';


const styles = StyleSheet.create({
  circle: {
    borderRadius: (dimensions.bigIconSize + 15) / 2,
    ...Platform.select({
      ios: {
        paddingTop: 4,
        paddingLeft: 1,
      },
    }),
    alignItems: 'center',
    justifyContent: 'center',
    width: dimensions.bigIconSize + 15,
    height: dimensions.bigIconSize + 15,
    borderWidth: 2,
    borderColor: colors.greyDarker,
  },
  touchableContent: {
    height: dimensions.bigIconSize,
    width: dimensions.bigIconSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const BigRoundIconButton = ({
  backgroundColor, tintColor = colors.white, border, onPress, containerStyle, ...props
}) => (
  <View style={containerStyle}>
    <View style={[styles.circle, { backgroundColor }, border]}>
      <TouchableItem borderless onPress={onPress} style={styles.touchableContent} >
        <CategoryIcon tintColor={tintColor} {...props} />
      </TouchableItem>
    </View>
  </View>
);

BigRoundIconButton.propTypes = {
  backgroundColor: T.string,
  tintColor: T.string,
  border: T.any,
  containerStyle: T.any,
  onPress: T.func,
};

export default BigRoundIconButton;
