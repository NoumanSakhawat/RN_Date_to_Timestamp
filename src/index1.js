import React, {Component} from 'react';
import {View, Text, NativeModules, Platform} from 'react-native';
import ConvertDate from '../ConvertDate';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    // var convertDate = NativeModules.ConvertDate;
    // convertDate.convertToDate(1583598163, 'YYYY.MM.DD').then(res => {
    //   console.warn('RES', res);
    // });
    // const res = ConvertDate.convertToDate(1583598163, 'YYYY.MM.DD');
    ConvertDate.convertToDate('1583598163', 'YYYY.MM.DD').then(res => {
      console.warn('RES', res);
    });
    // console.warn('RES', res);
  };

  render() {
    return (
      <View>
        <Text> index </Text>
      </View>
    );
  }
}

export default index;
