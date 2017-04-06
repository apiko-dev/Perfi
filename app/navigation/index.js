import { Platform } from 'react-native';
import AndroidNavigator from './AndroidNavigator';
import IOSNavigator from './IOSNavigator';

export default Platform.OS === 'android' ? AndroidNavigator : IOSNavigator;
