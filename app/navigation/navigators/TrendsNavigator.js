import { StackNavigator } from 'react-navigation';
import Trends from '../../screens/trends/TrendsScreen';
import screens from '../../constants/screens';
import navOptions from '../../utils/navOptions';
import headerOptions from '../../utils/stackHeaderOptions';

const TrendsNavigator = StackNavigator({
  [screens.Trends]: {
    screen: Trends,
    navigationOptions: headerOptions({ title: 'Categories' }),
  },
}, {
  ...navOptions({
    title: 'Trends',
    icon: 'bar-chart',
  }),
});

export default TrendsNavigator;
