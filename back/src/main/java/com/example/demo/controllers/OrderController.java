package com.example.demo.controllers;

import com.alibaba.fastjson.JSON;
import com.example.demo.entity.Order;
import com.example.demo.service.OrderService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.web.bind.annotation.*;
import com.example.demo.entity.Item;
import org.springframework.web.context.WebApplicationContext;

import java.sql.Timestamp;
import java.util.Map;
import java.util.List;

@RestController
@Scope("prototype")
public class OrderController {
    @Autowired
    WebApplicationContext applicationContext;

    @CrossOrigin
    @RequestMapping(value = "/order", method = RequestMethod.GET)
    public List<Order> getOrder(@RequestParam (value = "id") int user_id){
        OrderService orderService = applicationContext.getBean(OrderService.class);
        return orderService.getOrder(user_id);
    }
    @CrossOrigin
    @RequestMapping(value = "/orderInfo", method = RequestMethod.GET)
    public List<Item> getOrderInfo(@RequestParam (value = "id") int user_id, @RequestParam(value = "order_id") int order_id){
        OrderService orderService = applicationContext.getBean(OrderService.class);
        return orderService.getOrderInfo(user_id, order_id);
    }
    @CrossOrigin
    @RequestMapping(value = "/total", method = RequestMethod.GET)
    public int getTotal(@RequestParam (value = "id") int order_id){
        OrderService orderService = applicationContext.getBean(OrderService.class);
        return orderService.getTotal(order_id);
    }
    @CrossOrigin
    @RequestMapping(value = "/clearorder", method = RequestMethod.POST)
    public int deleteOrder(@RequestBody Map<String, String> map){
        int order_id = Integer.parseInt(map.get("id"));
        OrderService orderService = applicationContext.getBean(OrderService.class);
        return orderService.deleteOrder(order_id);
    }
    @CrossOrigin
    @RequestMapping(value = "getallOrder")
    List<Order> getAll(){
        OrderService orderService = applicationContext.getBean(OrderService.class);
        return orderService.getAll();
    }
}
