package group.ashelloworld;
import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.TextView;
import java.util.ArrayList;
import java.util.List;
import group.ashelloworld.adapter.ItemAdapter;
import group.ashelloworld.model.Item;


public class MainActivity extends AppCompatActivity {


    private List<Item> values;
    private ListView listView;
    private ItemAdapter adapter;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        addValues();
        listView = findViewById(R.id.listView);
        adapter = new ItemAdapter(values, this);
        listView.setAdapter(adapter);
        listView.setOnItemClickListener((parent, view, pos, id) -> {
            TextView tv = view.findViewById(R.id.rowTextView);
            ImageView iv = view.findViewById(R.id.rowImageView);
            System.out.println("Index: " + pos);
            System.out.println("Id: " + id);
            System.out.println("Parent: " + parent.getClass().getName());
            System.out.println("View: " + view.getClass().getName());
            System.out.println("Content: " + tv.getText());
            Intent intent = new Intent(this, DetailActivity.class);
            intent.putExtra("text", tv.getText());
            // intent.putExtra("image", iv.getImageResource());
            startActivity(intent);
        });
    }


    private void addValues() {
        values = new ArrayList<Item>(){
            {
                add(new Item("Nebula 1", R.drawable.space));
                add(new Item("Nebula 2", R.drawable.space));
                add(new Item("Nebula 3", R.drawable.space));
            }
        };
    }


    public void addPressed(View view) {
        System.out.println("Add pressed");
        newValue();
        adapter.notifyDataSetChanged();
    }


    private void newValue() {
        values.add(new Item("New Nebula", R.drawable.space));
    }


}