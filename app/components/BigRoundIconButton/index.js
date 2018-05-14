import React from 'react';
import T from 'prop-types';
import { StyleSheet, View } from 'react-native';
import CategoryIcon from '../CategoryIcon';
import TouchableItem from '../TouchableItem';
import { colors, dimensions } from '../../styles';


const styles = StyleSheet.create({
  circle: {
    borderRadius: (dimensions.bigIconSize + 15) / 2,
    paddingTop: 4,
    paddingLeft: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: dimensions.bigIconSize + 15,
    height: dimensions.bigIconSize + 15,
    borderWidth: 2,
    borderColor: colors.greyDarker,
  },
});


const BigRoundIconButton = ({ backgroundColor, tintColor = colors.white, border, onPress, containerStyle, ...props }) => (
  <TouchableItem onPress={onPress} style={containerStyle}>
    <View style={[styles.circle, { backgroundColor }, border]} >
      <CategoryIcon tintColor={tintColor} {...props} />
    </View>
  </TouchableItem>
);

BigRoundIconButton.propTypes = {
  backgroundColor: T.string,
  tintColor: T.string,
  border: T.any,
  containerStyle: T.any,
  onPress: T.func,
};

export default BigRoundIconButton;
