import React from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { withToggle } from '../../utils/enhancers';

const Collapse = ({ headerStyle, contentStyle, isOn, toggle, children, ...props }) => (
  <View>
    <ListItem
      containerStyle={headerStyle}

      {...props}
      onPress={toggle}
    />
    {isOn && (
      <View style={contentStyle}>
        {children}
      </View>
    )}
  </View>
);

Collapse.propTypes = {};

export default withToggle(Collapse);
