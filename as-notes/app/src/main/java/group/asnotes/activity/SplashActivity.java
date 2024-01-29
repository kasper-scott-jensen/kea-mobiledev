package group.asnotes.activity;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;

import group.asnotes.R;

@SuppressLint("CustomSplashScreen")
public class SplashActivity extends AppCompatActivity {

    private Handler handler;
    private ActionBar ab;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        ab = getSupportActionBar();
        assert ab != null;
        ab.hide();

        handler = new Handler();
        handler.postDelayed(() -> startActivity(new Intent(SplashActivity.this, MainActivity.class)), 4000);

    }

}