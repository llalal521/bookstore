package com.example.demo.service;

import java.sql.Timestamp;

import com.example.demo.entity.Item;
import com.example.demo.entity.Order;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import java.util.List;
import java.util.Map;

public interface OrderService {
    List<Order> getOrder(int user_id);
    List<Item> getOrderInfo(int user_id, int order_id);
    int getTotal(int order_id);
    int deleteOrder(int order_id);
    List<Order> getAll();
}
