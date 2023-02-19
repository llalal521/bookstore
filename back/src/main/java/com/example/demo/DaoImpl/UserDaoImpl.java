package com.example.demo.DaoImpl;

import com.example.demo.Dao.UserDao;
import com.example.demo.entity.*;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;

@Repository
public class UserDaoImpl implements UserDao {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private OrderRepository orderRepository;

    @Override
    public int addOne(String username, String password, String e_mail){
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        user.setE_mail(e_mail);
        user.setType(0);
        user.setStatus(0);
        Cart cart = new Cart();
        user.setUserCart(cart);
        cart.setUser(user);
        List<Item> itemList = new LinkedList<>();
        cart.setItem_list(itemList);
        userRepository.save(user);
        return user.getId();
    }

    @Override
    public User Login(String username, String password){
        List<User> user = userRepository.findByUsername(username);
        User notFound = new User();
        notFound.setId(-1);
        if (user.isEmpty()) return notFound;
        if(user.get(0).getPassword().equals(password)){
            return user.get(0);
        }
        return notFound;
    }

    @Override
    public List<User> getUser(){
        return userRepository.findAll();
    }

    @Override
    public int forbidOne(int id){
        User user = userRepository.getOne(id);
        if(user.getStatus() == 0){
            user.setStatus(1);
            userRepository.save(user);
            return 1;
        }
        user.setStatus(0);
        userRepository.save(user);
        return 0;
    }

    @Override
    public int JudgeExist(String username){
        List<User> userList = userRepository.findByUsername(username);
        if(userList.isEmpty())
            return 1;
        return 0;
    }

    @Override
    public List<UserRange> getRange(){
        List<Order> list = orderRepository.findAll();
        List<UserRange> result = new LinkedList<>();
        for(int i = 0; i < list.size(); ++i){
            Order order = list.get(i);
            String username = order.getUser().getUsername();
            int m = 0;
            for(int j = 0; j < result.size(); ++j){
                if(result.get(j).getUsername().equals(username)){
                    result.get(j).setTotal_Price(result.get(j).getTotal_Price() + order.getTotal_price());
                    break;
                }
                m++;
            }
            if(m == result.size()){
                UserRange tmp = new UserRange();
                tmp.setTotal_Price(new Long(order.getTotal_price()));
                tmp.setUsername(order.getUser().getUsername());
                result.add(tmp);
            }
        }
        result.sort(new Comparator<UserRange>() {
            @Override
            public int compare(UserRange o1, UserRange o2) {
                int i = o2.getTotal_Price().compareTo(o1.getTotal_Price());
                if(i == 0){
                    return o2.getTotal_Price().compareTo(o1.getTotal_Price());
                }
                return i;
            }
        });
        return result;
    }
    @Override
    public List<UserRange> updateRange(Timestamp start, Timestamp end){
        List<Order> list = orderRepository.findAll();
        List<UserRange> result = new LinkedList<>();
        for(int i = 0; i < list.size(); ++i){
            Order order = list.get(i);
            if(order.getTime().compareTo(start) == -1 || order.getTime().compareTo(end) == 1 )
                continue;
            String username = order.getUser().getUsername();
            int m = 0;
            for(int j = 0; j < result.size(); ++j){
                if(result.get(j).getUsername().equals(username)){
                    result.get(j).setTotal_Price(result.get(j).getTotal_Price() + order.getTotal_price());
                    break;
                }
                m++;
            }
            if(m == result.size()){
                UserRange tmp = new UserRange();
                tmp.setTotal_Price(new Long(order.getTotal_price()));
                tmp.setUsername(order.getUser().getUsername());
                result.add(tmp);
            }
        }
        result.sort(new Comparator<UserRange>() {
            @Override
            public int compare(UserRange o1, UserRange o2) {
                int i = o2.getTotal_Price().compareTo(o1.getTotal_Price());
                if(i == 0){
                    return o2.getTotal_Price().compareTo(o1.getTotal_Price());
                }
                return i;
            }
        });
        return result;
    }

    @Override
    public List<BookRange> getRecord(int id){
        User user = userRepository.getOne(id);
        List<Order> list = user.getUserOrder();
        List<BookRange> result = new LinkedList<>();
        for(int i = 0; i < list.size(); ++i){
            Order order = list.get(i);
            List<Item> items = order.getItem_list();
            for(int j = 0; j < items.size(); ++j){
                Item item = items.get(j);
                int num = item.getNum();
                Book book = item.getBook();
                int n = 0;
                for(int m = 0; m < result.size();++m){
                    if(result.get(m).getTitle().equals(book.getTitle())) {
                        result.get(m).setNum(result.get(m).getNum() + num);
                        break;
                    }
                    n++;
                }
                if(n == result.size()){
                    BookRange tmp = new BookRange();
                    tmp.setNum(new Long(num));
                    tmp.setAuthor(book.getAuthor());
                    tmp.setImg(book.getImg());
                    tmp.setClassname(book.getClassname());
                    tmp.setTitle(book.getTitle());
                    tmp.setPrice(book.getPrice());
                    result.add(tmp);
                }
            }
        }
        return result;
    }

    @Override
    public List<BookRange> updateRecord(Timestamp start, Timestamp end, int id){
        User user = userRepository.getOne(id);
        List<Order> list = user.getUserOrder();
        List<BookRange> result = new LinkedList<>();
        for(int i = 0; i < list.size(); ++i){
            Order order = list.get(i);
            if(order.getTime().compareTo(start) == -1 || order.getTime().compareTo(end) == 1 )
                continue;
            List<Item> items = order.getItem_list();
            for(int j = 0; j < items.size(); ++j){
                Item item = items.get(j);
                int num = item.getNum();
                Book book = item.getBook();
                int n = 0;
                for(int m = 0; m < result.size();++m){
                    if(result.get(m).getTitle().equals(book.getTitle())) {
                        result.get(m).setNum(result.get(m).getNum() + num);
                        break;
                    }
                    n++;
                }
                if(n == result.size()){
                    BookRange tmp = new BookRange();
                    tmp.setNum(new Long(num));
                    tmp.setAuthor(book.getAuthor());
                    tmp.setImg(book.getImg());
                    tmp.setClassname(book.getClassname());
                    tmp.setTitle(book.getTitle());
                    tmp.setPrice(book.getPrice());
                    result.add(tmp);
                }
            }
        }
        return result;
    }
}
