package com.example.demo.DaoImpl;

import com.example.demo.Dao.OrderDao;
import com.example.demo.entity.Item;
import com.example.demo.entity.Order;
import com.example.demo.entity.User;
import com.example.demo.entity.Book;
import com.example.demo.repository.*;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@Repository
public class OrderDaoImpl implements OrderDao {
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    ItemRepository itemRepository;
    @Autowired
    BookRepository bookRepository;

    @Override
    public void addOne(int user_id, Timestamp time, JSONArray body, int total_price){
        Order order = new Order();
        User user = userRepository.getOne(user_id);
        order.setUser(user);
        order.setTime(time);
        orderRepository.save(order);
        for(int i = 0 ; i < body.size(); ++i){
            JSONObject obj = body.getJSONObject(i);
            Book book = (Book)JSONObject.toBean(obj.getJSONObject("book"), Book.class);
            Long current_stock = book.getCurrent_stock();
            int num = obj.getInt("num");
            current_stock = current_stock - num;
            book.setCurrent_stock(current_stock);
            Item item = new Item();
            item.setBook(book);
            item.setNum(obj.getInt("num"));
            item.setOrder(order);
            itemRepository.save(item);
        }
        order.setTotal_price(total_price);
        orderRepository.save(order);
    }

    @Override
    public List<Order> getOrder(int user_id) {
        List<Order> list = orderRepository.findOrderByUser_Id(user_id);
        return list;
    }

    @Override
    public List<Item> getOrderInfo(int user_id, int order_id){
        List<Item> list = itemRepository.findItemByOrder_id(order_id);
        return list;
    }

    @Override
    public int getTotal(int order_id){
        Order order = orderRepository.getOne(order_id);
        return order.getTotal_price();
    }

    @Override
    public int deleteOrder(int order_id){
        Order order = orderRepository.getOne(order_id);
        orderRepository.delete(order);
        return 0;
    }

    @Override
    public List<Order> getAll(){
        return orderRepository.findAll();
    }
}
