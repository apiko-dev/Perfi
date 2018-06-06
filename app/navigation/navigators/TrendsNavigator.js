import { StackNavigator } from 'react-navigation';
import Trends from '../../screens/Trends';
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
    icon: 'chart',
  }),
});

export default TrendsNavigator;
