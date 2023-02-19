package com.example.demo.Dao;

import com.example.demo.entity.Book;
import com.example.demo.entity.Item;

import java.util.List;

public interface CartDao {
    Book addOne(int user_id, Integer book_id, int num);
    List<Item> getCartInfo(int id);
    void clear(int id);
    void clearOne(int id);
}
