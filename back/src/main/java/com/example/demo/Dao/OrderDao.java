package com.example.demo.Dao;

import com.example.demo.entity.Item;
import com.example.demo.entity.Order;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import java.sql.Timestamp;
import java.util.List;
import java.util.Map;

public interface OrderDao {
    void addOne(int user_id , Timestamp time, JSONArray body, int total_price);
    List<Order> getOrder(int user_id);
    List<Item> getOrderInfo(int user_id, int order_id);
    int getTotal(int order_id);
    int deleteOrder(int order_id);
    List<Order> getAll();
}
