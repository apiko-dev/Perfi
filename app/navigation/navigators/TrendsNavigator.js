import { StackNavigator } from 'react-navigation';
import { Trends } from '../../screens';
import screens from '../../constants/screens';
import navOptions from '../../utils/navOptions';

const TrendsNavigator = StackNavigator({
  [screens.Trends]: {
    screen: Trends,
  },
}, {
  ...navOptions({
    title: 'Trends',
    icon: 'chart-line',
  }),
});

export default TrendsNavigator;
