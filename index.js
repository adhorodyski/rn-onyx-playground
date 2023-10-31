/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {initOnyx} from './src/lib/onyx';
import {populateMMKV} from './src/lib/mmkv';

AppRegistry.registerComponent(appName, () => App);
initOnyx();
populateMMKV();
