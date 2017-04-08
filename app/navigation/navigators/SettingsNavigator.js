import { StackNavigator } from 'react-navigation';
import { Settings } from '../../scenes';
import scenes from '../../constants/scenes';
import navOptions from '../../utils/navOptions';

const SettingsNavigator = StackNavigator({
  [scenes.Settings]: {
    screen: Settings,
  },
}, {
  ...navOptions({
    title: 'Settings',
    icon: 'settings',
  }),
});

export default SettingsNavigator;
