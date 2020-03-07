package com.rn_date_to_timestamp;



import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.toast.ToastModule;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

public class ConvertDate extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;


    ConvertDate(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @ReactMethod
    public String convertToDate(String timeStamp, String dateFormat,
                                Promise promise) {
        SimpleDateFormat formatter = new SimpleDateFormat(dateFormat);
        Toast.makeText(reactContext, "Date"+timeStamp, Toast.LENGTH_SHORT).show();
//        String dateString =timeStamp;
        String dateString = formatter.format(new Date(Long.parseLong(timeStamp)));
        Toast.makeText(reactContext, "Date"+dateString, Toast.LENGTH_SHORT).show();
        promise.resolve(dateString);
        return dateString;
    }


    @NonNull
    @Override
    public String getName() {
        return "ConvertDate";
    }
}