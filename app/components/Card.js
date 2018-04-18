import { StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { compose, defaultProps } from 'recompose';
import appStyles from '../styles/AppStyles';

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 5,
    marginRight: 0,
    marginBottom: 5,
    marginLeft: 0,
  },
});

export default compose(defaultProps({
  containerStyle: [styles.containerStyle, appStyles.containerStyle],
}))(Card);
