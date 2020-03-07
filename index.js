// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './src/index';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// @flow

import {NativeModules, Platform} from 'react-native';
import ConvertDate from './ConvertDate';

function convertTimestamp(timeStamp, dateFormat) {
  if (Platform.OS === 'ios') {
    var convertDate = NativeModules.ConvertDate;
    convertDate.convertToDate(timeStamp, dateFormat).then(res => {
      return res.toString();
    });
  }

  if (Platform.OS === 'android') {
    ConvertDate.convertToDate(timeStamp, dateFormat).then(res => {
      console.warn('DATE', res);
      return res.toString();
    });
  }
}

// };

export default convertTimestamp;
