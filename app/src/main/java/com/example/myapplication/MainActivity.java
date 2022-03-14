package com.example.myapplication;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.Manifest;
import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.telephony.PhoneStateListener;
import android.telephony.TelephonyManager;

public class MainActivity extends AppCompatActivity {
    private static final String[] PERMISSIONS = {
            Manifest.permission.READ_PHONE_STATE,
            Manifest.permission.ACCESS_COARSE_LOCATION,
            Manifest.permission.ACCESS_FINE_LOCATION
    };
    private static final int PERMISSION_REQUEST = 0xFF;

    private TelephonyManager mTelephonyManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        checkPermissions();
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);

        switch (requestCode) {
            case PERMISSION_REQUEST:
                isPermissionGranted(grantResults);
                return;
        }
    }

    private void isPermissionGranted(int[] grantResult) {
        if (grantResult.length > 0) {
            if (grantResult[0] == PackageManager.PERMISSION_GRANTED)
                callPhoneManager();
            else
                PermissionUtils.alertAndFinish(this);
        }
    }

    private void checkPermissions() {
        if (!PermissionUtils.canReadPhoneState(this) || !PermissionUtils.canAccessCoarseLocation(this))
            requestPermissions(PERMISSIONS, PERMISSION_REQUEST);
        else
            callPhoneManager();
    }

    private void callPhoneManager() {
        mTelephonyManager = (TelephonyManager) getSystemService(Context.TELEPHONY_SERVICE);
        mTelephonyManager.listen(new PhoneCallback(),
                     PhoneStateListener.LISTEN_CELL_INFO |
                            PhoneStateListener.LISTEN_CELL_LOCATION |
                            PhoneStateListener.LISTEN_DATA_ACTIVITY |
                            PhoneStateListener.LISTEN_DATA_CONNECTION_STATE |
                            PhoneStateListener.LISTEN_SERVICE_STATE |
                            PhoneStateListener.LISTEN_SIGNAL_STRENGTHS |
                            PhoneStateListener.LISTEN_CALL_FORWARDING_INDICATOR |
                            PhoneStateListener.LISTEN_MESSAGE_WAITING_INDICATOR);
    }
}