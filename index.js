/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Navegacao from './src/navegacao';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';

AppRegistry.registerComponent(appName, () => Navegacao);

TrackPlayer.registerPlaybackService(() => require('./services.js'));