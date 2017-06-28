import React from 'react';
import { Icon } from 'react-native-elements';
import styles from '../styles/AppStyles';

const HeaderIcon = props => (
  <Icon
    iconStyle={styles.headerIconStyle}
    type="material-community"
    underlayColor="transparent"
    {...props}
  />
);

export default HeaderIcon;