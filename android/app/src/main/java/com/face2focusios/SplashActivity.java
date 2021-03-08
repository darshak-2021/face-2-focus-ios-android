package com.face2focusios;


import android.content.Intent;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;

public class SplashActivity extends AppCompatActivity  {
    @Override
    protected void onCreate(Bundle saveInstanceStatus) {
        super.onCreate(saveInstanceStatus);
        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }
}
