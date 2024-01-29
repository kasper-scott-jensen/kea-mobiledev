package group.ashelloworld.adapter;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.List;

import group.ashelloworld.R;
import group.ashelloworld.model.Item;


public class ItemAdapter extends BaseAdapter {


    private List<Item> items;
    private LayoutInflater inflater;


    public ItemAdapter(List<Item> items, Context context) {
        this.items = items;
        inflater = LayoutInflater.from(context);
    }


    @Override
    public int getCount() {
        return items.size();
    }


    @Override
    public Object getItem(int i) {
        return items.get(i);
    }


    @Override
    public long getItemId(int i) {
        return i;
    }


    @Override
    public View getView(int i, View view, ViewGroup viewGroup) {
        if (view == null) {
            view = inflater.inflate(R.layout.myrow, null);
        }
        TextView textView = view.findViewById(R.id.rowTextView);
        textView.setText(items.get(i).getText());
        ImageView imageView = view.findViewById(R.id.rowImageView);
        imageView.setImageResource(items.get(i).getImage());

        return view;
    }


}
