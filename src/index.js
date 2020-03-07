// @flow

import {NativeModules, Platform} from 'react-native';
import ConvertDate from '../ConvertDate';

// type IConvertToDate = {
//     timeStamp: string,
//     dateFormat?: string
//     convertTimestamp(timeStamp, dateFormat): any
// };
// let date = new Date().getTime();

// const ConvertToDate: IConvertToDate = {

//     timeStamp: date.toString(),
//     dateFormat: "YYYY.MM.DD",
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
