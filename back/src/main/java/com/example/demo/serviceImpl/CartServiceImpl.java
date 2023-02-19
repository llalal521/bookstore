package com.example.demo.serviceImpl;

import com.example.demo.entity.Item;
import com.example.demo.Dao.CartDao;
import com.example.demo.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImpl implements CartService {
    @Autowired
    CartDao cartDao;
    @Override
    public void addOne(int user_id, Integer book_id, int num){
        cartDao.addOne(user_id, book_id, num);
    }

    @Override
    public List<Item> getCartInfo(int id){return cartDao.getCartInfo(id);}

    @Override
    public void clear(int id){ cartDao.clear(id); }

    @Override
    public void clearOne(int id){ cartDao.clearOne(id); }
}
