package com.example.demo.serviceImpl;

import com.example.demo.entity.Item;
import com.example.demo.Dao.OrderDao;
import com.example.demo.entity.Order;
import com.example.demo.service.OrderService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Map;

@Service
@Scope("prototype")
public class OrderServiceImpl implements OrderService {
    @Autowired
    OrderDao orderDao;

    @Override
    public List<Order> getOrder(int user_id){
        return orderDao.getOrder(user_id);
    }

    @Override
    public List<Item> getOrderInfo(int user_id, int order_id){ return orderDao.getOrderInfo(user_id, order_id);}

    @Override
    public int getTotal(int order_id){return orderDao.getTotal(order_id);}

    @Override
    public int deleteOrder(int order_id){ return orderDao.deleteOrder(order_id);}

    @Override
    public List<Order> getAll(){ return orderDao.getAll(); }
}
