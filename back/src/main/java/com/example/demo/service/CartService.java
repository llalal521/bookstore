package com.example.demo.service;

import com.example.demo.entity.Item;
import java.util.List;

public interface CartService {
    void addOne(int user_id, Integer book_id, int num);
    List<Item> getCartInfo(int id);
    void clear(int id);
    void clearOne(int id);
}
