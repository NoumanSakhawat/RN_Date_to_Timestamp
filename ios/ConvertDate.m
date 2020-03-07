//
//  ConvertDate.m
//  RN_Date_to_Timestamp
//
//  Created by iOPTIME on 07/03/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ConvertDate.h"
#import <React/RCTLog.h>

@implementation ConvertDate

// To export a module named ConvertDate
RCT_EXPORT_MODULE();

//RCT_EXPORT_METHOD(convertToDate:(double )date format:(NSString *)format
//                  convertToDateWithResolver:(RCTPromiseResolveBlock)resolve
//                  convertToDateWithrejecter:(RCTPromiseRejectBlock)reject
//                  convertToDateWithcallback:(RCTResponseSenderBlock)callback){
//
//  double timeStamp = date;
//
//  NSTimeInterval timeInterval= timeStamp/1000;
//
//  NSDate *date1 =[NSDate dateWithTimeIntervalSince1970: timeInterval];
//
//  NSDateFormatter *dateformatter=[[NSDateFormatter alloc]init];
//
//  [dateformatter setDateFormat:format];
//
//  NSString *dateString=[dateformatter stringFromDate:date1];
////  RCTLogInfo(@"Date %@", dateString);
//  resolve(dateString);
//
//}

RCT_REMAP_METHOD(convertToDate, timeStamp:(NSString * )timeStampString dateFormat:(NSString *)dateFormat resolver: (RCTPromiseResolveBlock)resolve
     rejecter:(RCTPromiseRejectBlock)reject)
{

 double timeStamp = timeStampString;

  NSTimeInterval timeInterval= timeStamp/1000;

  NSDate *date1 =[NSDate dateWithTimeIntervalSince1970: timeInterval];

  NSDateFormatter *dateformatter=[[NSDateFormatter alloc]init];

  [dateformatter setDateFormat: dateFormat];

  NSString *dateString=[dateformatter stringFromDate:date1];
  resolve(dateString);
  return;

}


@end
