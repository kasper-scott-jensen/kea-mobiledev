package group.asnotes.activity;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Log;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.textfield.TextInputEditText;
import com.google.firebase.firestore.FirebaseFirestore;
import java.util.HashMap;
import java.util.Map;

import group.asnotes.R;

public class DetailActivity extends AppCompatActivity {

    private ActionBar ab;
    private TextInputEditText tietTitle;
    private TextInputEditText tietBody;
    private FloatingActionButton fabCancel;
    private FloatingActionButton fabAccept;
    private AlertDialog alertDialog;

    private final String TAG = "DetailActivity";
    private final FirebaseFirestore db = FirebaseFirestore.getInstance();

    private String taskTitle;
    private String taskBody;
    private Map<String, Object> docData;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detail);

        alertDialog = new AlertDialog.Builder(DetailActivity.this).create();
        alertDialog.setTitle("OBS");

        ab = getSupportActionBar();
        assert ab != null;
        ab.setTitle("DETAIL VIEW");

        fabCancel = findViewById(R.id.detailCancelButton);
        fabAccept = findViewById(R.id.detailAcceptButton);
        tietTitle = findViewById(R.id.detailInputEditTitle);
        tietBody = findViewById(R.id.detailInputEditBody);

        fabAccept.setEnabled(false);

        tietTitle.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                // before change text
            }
            @Override
            public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                taskTitle = String.valueOf(tietTitle.getText());
                fabAccept.setEnabled(!taskTitle.equals(""));
            }
            @Override
            public void afterTextChanged(Editable editable) {
                // after change text
            }
        });

        tietBody.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                // before change text
            }
            @Override
            public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                taskBody = String.valueOf(tietBody.getText());
                fabAccept.setEnabled(!taskBody.equals(""));
            }
            @Override
            public void afterTextChanged(Editable editable) {
                // after change text
            }
        });

        fabAccept.setOnClickListener(view -> {
            docData = new HashMap<>();
            docData.put("title", taskTitle);
            docData.put("body", taskBody);
            db.collection("tasks")
                .add(docData)
                .addOnSuccessListener(documentReference -> {
                    Log.i(TAG, "Snapshot ID: " + documentReference.getId());
                    getAlertDialog(1);

                })
                .addOnFailureListener(error -> {
                    Log.e(TAG, "Error: ", error);
                    getAlertDialog(0);
                });
        });

        fabCancel.setOnClickListener(view -> {
            tietTitle.setText("");
            tietBody.setText("");
            startActivity(new Intent(DetailActivity.this, MainActivity.class));
        });

    }

    public void getAlertDialog(int status) {
        if (status == 0) {
            alertDialog.setMessage("Woops! Something went wrong.");
        } else if (status == 1) {
            alertDialog.setMessage("Woohoo! Task saved!");
        }
        alertDialog.setButton(AlertDialog.BUTTON_POSITIVE, "OK", (dialogInterface, i) -> {
            tietTitle.setText("");
            tietBody.setText("");
            dialogInterface.dismiss();
            startActivity(new Intent(DetailActivity.this, MainActivity.class));
        });
        alertDialog.show();
    }

}