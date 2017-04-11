import { StackNavigator } from 'react-navigation';
import { Trends } from '../../scenes';
import scenes from '../../constants/scenes';
import navOptions from '../../utils/navOptions';

const TrendsNavigator = StackNavigator({
  [scenes.Trends]: {
    screen: Trends,
  },
}, {
  ...navOptions({
    title: 'Trends',
    icon: 'chart-line',
  }),
});

export default TrendsNavigator;
