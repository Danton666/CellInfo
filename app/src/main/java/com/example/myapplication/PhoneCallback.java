package com.example.myapplication;

import android.telephony.CellInfo;
import android.telephony.CellLocation;
import android.telephony.PhoneStateListener;
import android.telephony.ServiceState;
import android.telephony.TelephonyManager;
import android.telephony.cdma.CdmaCellLocation;
import android.telephony.gsm.GsmCellLocation;
import android.util.Log;

import java.util.List;

public class PhoneCallback extends PhoneStateListener {
    public static final String TAG = "PhoneCallback";

    public PhoneCallback() {
        Log.i(TAG, "Default PhoneCallback");
    }

    private String serviceStateToString(int serviceState) {
        switch (serviceState) {
            case ServiceState.STATE_IN_SERVICE:
                return "STATE_IN_SERVICE";
            case ServiceState.STATE_OUT_OF_SERVICE:
                return "STATE_OUT_OF_SERVICE";
            case ServiceState.STATE_EMERGENCY_ONLY:
                return "STATE_EMERGENCY_ONLY";
            case ServiceState.STATE_POWER_OFF:
                return "STATE_POWER_OFF";
            default:
                return "UNKNOWN_STATE";
        }
    }

    private String callStateToString(int state) {
        switch (state) {
            case TelephonyManager.CALL_STATE_IDLE:
                return "\nonCallStateChanged: CALL_STATE_IDLE, ";
            case TelephonyManager.CALL_STATE_RINGING:
                return "\nonCallStateChanged: CALL_STATE_RINGING, ";
            case TelephonyManager.CALL_STATE_OFFHOOK:
                return "\nonCallStateChanged: CALL_STATE_OFFHOOK, ";
            default:
                return "\nUNKNOWN_STATE: " + state + ", ";
        }
    }

    @Override
    public void onCellInfoChanged(List<CellInfo> cellInfo) {
        super.onCellInfoChanged(cellInfo);
        Log.i(TAG, "onCellInfoChanged: " + cellInfo);
    }

    @Override
    public void onDataActivity(int direction) {
        super.onDataActivity(direction);

        switch (direction) {
            case TelephonyManager.DATA_ACTIVITY_NONE:
                Log.i(TAG, "onDataActivity: DATA_ACTIVITY_NONE");
                break;
            case TelephonyManager.DATA_ACTIVITY_OUT:
                Log.i(TAG, "onDataActivity: DATA_ACTIVITY_OUT");
                break;
            case TelephonyManager.DATA_ACTIVITY_INOUT:
                Log.i(TAG, "onDataActivity: DATA_ACTIVITY_INOUT");
                break;
            case TelephonyManager.DATA_ACTIVITY_DORMANT:
                Log.i(TAG, "onDataActivity: DATA_ACTIVITY_DORMANT");
                break;
            default:
                Log.w(TAG, "onDataActivity: UNKNOWN " + direction);
        }
    }

    @Override
    public void onServiceStateChanged(ServiceState serviceState) {
        super.onServiceStateChanged(serviceState);

        String message = "onServiceStateChanged: " + serviceState + "\n";
        message += "onServiceStateChanged: getOperatorAlphaLong " + serviceState.getOperatorAlphaLong() + "\n";
        message += "onServiceStateChanged: getOperatorAlphaShort " + serviceState.getOperatorAlphaShort() + "\n";
        message += "onServiceStateChanged: getOperatorNumeric " + serviceState.getOperatorNumeric() + "\n";
        message += "onServiceStateChanged: getIsManualSelection " + serviceState.getIsManualSelection() + "\n";
        message += "onServiceStateChanged: getRoaming " + serviceState.getRoaming() + "\n";
        message += "onServiceStateChanged: " + serviceStateToString(serviceState.getState());
        Log.i(TAG, message);
    }

    @Override
    public void onCallStateChanged(int state, String phoneNumber) {
        super.onCallStateChanged(state, phoneNumber);

        callStateToString(state);
        String message = callStateToString(state) + "incomingNumber: " + phoneNumber;

        Log.i(TAG, message);
    }

    @Override
    public void onCellLocationChanged(CellLocation location) {
        super.onCellLocationChanged(location);

        String message = "";
        if (location instanceof GsmCellLocation) {
            GsmCellLocation gcLoc = (GsmCellLocation) location;
            message += "onCellLocationChanged: GsmCellLocation " + gcLoc + "\n";
            message += "onCellLocationChanged: GsmCellLocation getCid " + gcLoc.getCid() + "\n";
            message += "onCellLocationChanged: GsmCellLocation getLac " + gcLoc.getLac() + "\n";
            message += "onCellLocationChanged: GsmCellLocation getPsc" + gcLoc.getPsc(); // Requires min API 9
            Log.i(TAG, message);
        } else if (location instanceof CdmaCellLocation) {
            CdmaCellLocation ccLoc = (CdmaCellLocation) location;
            message += "onCellLocationChanged: CdmaCellLocation " + ccLoc + "\n";;
            message += "onCellLocationChanged: CdmaCellLocation getBaseStationId " + ccLoc.getBaseStationId() + "\n";;
            message += "onCellLocationChanged: CdmaCellLocation getBaseStationLatitude " + ccLoc.getBaseStationLatitude() + "\n";;
            message += "onCellLocationChanged: CdmaCellLocation getBaseStationLongitude" + ccLoc.getBaseStationLongitude() + "\n";;
            message += "onCellLocationChanged: CdmaCellLocation getNetworkId " + ccLoc.getNetworkId() + "\n";;
            message += "onCellLocationChanged: CdmaCellLocation getSystemId " + ccLoc.getSystemId();
            Log.i(TAG, message);
        } else {
            Log.i(TAG, "onCellLocationChanged: " + location);
        }
    }

    @Override
    public void onCallForwardingIndicatorChanged(boolean cfi) {
        super.onCallForwardingIndicatorChanged(cfi);
    }

    @Override
    public void onMessageWaitingIndicatorChanged(boolean mwi) {
        super.onMessageWaitingIndicatorChanged(mwi);
    }
}
