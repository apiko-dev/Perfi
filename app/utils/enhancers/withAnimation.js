import { compose, lifecycle, pure } from 'recompose';
import { LayoutAnimation } from 'react-native';

export default compose(
  pure,
  lifecycle({
    componentWillMount() {
      LayoutAnimation.easeInEaseOut();
    },
    componentWillUnmount() {
      LayoutAnimation.easeInEaseOut();
    },
  })
);
