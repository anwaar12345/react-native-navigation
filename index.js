/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import BasicApp from './src/component/BasicApp';

AppRegistry.registerComponent(appName, () => BasicApp);
