package com.example.demo.serviceImpl;

import com.example.demo.Dao.OrderDao;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;
import org.springframework.web.context.WebApplicationContext;

import java.sql.Timestamp;

@Component
public class Receivers {
    @Autowired
    WebApplicationContext applicationContext;

    @JmsListener(destination = "orderBox", containerFactory = "myFactory")
    public void create(JSONObject obj) {
        System.out.println("get a message, dealing with it");
        OrderDao orderDao = applicationContext.getBean(OrderDao.class);
        int user_id = obj.getInt("id");
        Long seconds = obj.getLong("time");
        Timestamp time = new Timestamp(seconds);
        JSONArray body = obj.getJSONArray("body");
        int price = obj.getInt("total_price");
        orderDao.addOne(user_id, time, body, price);
    }
}
