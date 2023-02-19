package com.example.demo.service;

import com.example.demo.entity.Book;
import com.example.demo.entity.BookMessage;
import com.example.demo.entity.BookRange;

import java.sql.Timestamp;
import java.util.List;

public interface BookService {

    BookMessage findBookById(Integer id);

    List<BookMessage> getBooks(int page);

    List<BookMessage> getBook();

    void addOne(String title, String author, int price, int current_stock, int total_stock, String description, String imgUrl, String classname);

    void deleteOne(int id);

    List<BookRange> getRange();

    List<BookRange> updateRange(Timestamp start, Timestamp end);

    Book modifyOne(int id, String title, String author, int price, int current_stock, int total_stock, String description, String imgUrl, String classname);
}
