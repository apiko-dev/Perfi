import { StackNavigator } from 'react-navigation';
import { Settings } from '../../screens';
import screens from '../../constants/screens';
import navOptions from '../../utils/navOptions';

const SettingsNavigator = StackNavigator({
  [screens.Settings]: {
    screen: Settings,
  },
}, {
  ...navOptions({
    title: 'Settings',
    icon: 'sliders',
  }),
});

export default SettingsNavigator;
