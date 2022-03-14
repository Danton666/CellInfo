package com.example.myapplication;

import android.Manifest;
import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.pm.PackageManager;

public class PermissionUtils {

    public static boolean hasPermission(Context ctx, String permission) {
        return ctx.checkSelfPermission(permission) == PackageManager.PERMISSION_GRANTED;
    }

    public static void alertAndFinish(final Activity activity) {
        AlertDialog.Builder builder = new AlertDialog.Builder(activity);
        builder.setTitle("AlertDialog").setMessage("Alerting...");

        builder.setPositiveButton("Positive Button", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                activity.finish();
            }
        });

        AlertDialog dialog = builder.create();
        dialog.show();
    }

    public static Boolean canAccessCoarseLocation(Activity activity) {
        return PermissionUtils.hasPermission(activity, Manifest.permission.ACCESS_COARSE_LOCATION);
    }

    public static Boolean canReadPhoneState(Activity activity) {
        return PermissionUtils.hasPermission(activity, Manifest.permission.READ_PHONE_STATE);
    }
}
