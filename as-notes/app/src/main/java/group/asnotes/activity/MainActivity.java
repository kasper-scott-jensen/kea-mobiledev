package group.asnotes.activity;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import android.annotation.SuppressLint;
import android.app.ProgressDialog;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.firebase.firestore.DocumentChange;
import com.google.firebase.firestore.FirebaseFirestore;
import java.util.ArrayList;
import group.asnotes.R;
import group.asnotes.model.Task;
import group.asnotes.adapter.TaskAdapter;

public class MainActivity extends AppCompatActivity {

    private ActionBar ab;
    private RecyclerView rv;
    private FloatingActionButton fabAdd;
    private ProgressDialog progressDialog;

    private ArrayList<Task> taskList;
    private TaskAdapter taskAdapter;

    private final String TAG = "DetailActivity";
    private final FirebaseFirestore db = FirebaseFirestore.getInstance();

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ab = getSupportActionBar();
        assert ab != null;
        ab.setTitle("HOME");

        progressDialog = new ProgressDialog(MainActivity.this);
        progressDialog.setCancelable(false);
        progressDialog.setMessage("Fetching data ...");
        progressDialog.show();

        rv = findViewById(R.id.listRecycler);
        fabAdd = findViewById(R.id.addButton);

        fabAdd.setOnClickListener(view -> startActivity(new Intent(MainActivity.this, DetailActivity.class)));

        rv.setHasFixedSize(true);
        rv.setLayoutManager(new LinearLayoutManager(MainActivity.this));

        taskList = new ArrayList<>();
        taskAdapter = new TaskAdapter(MainActivity.this, taskList);

        rv.setAdapter(taskAdapter);

        eventChangeListener();

    }

    @SuppressLint("NotifyDataSetChanged")
    private void eventChangeListener() {
        db.collection("tasks")
            .addSnapshotListener((value, error) -> {
                if (error != null) {
                    Log.e(TAG, "Error: " + error.getMessage());
                }
                assert value != null;
                for (DocumentChange dc : value.getDocumentChanges()) {
                    if (dc.getType() == DocumentChange.Type.ADDED) {
                        taskList.add(dc.getDocument().toObject(Task.class));
                    }
                    taskAdapter.notifyDataSetChanged();
                }
                progressDialog.dismiss();
            });
    }

}