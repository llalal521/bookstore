package com.example.demo.controllers;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.example.demo.entity.Book;
import com.example.demo.entity.BookMessage;
import com.example.demo.entity.BookRange;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.example.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

@RestController
public class BookListController {

    @Autowired
    private BookService bookService;

    @CrossOrigin
    @RequestMapping(value = "/")
    public List<BookMessage> home(@RequestParam(value="page") int page) {
        return bookService.getBooks(page);
    }

    @CrossOrigin
    @RequestMapping(value = "/ManageBook")
    public List<BookMessage> getBooks() {
        return bookService.getBook();
    }

    @CrossOrigin
    @RequestMapping(value = "/getOne")
    public BookMessage getOne(@RequestParam(value="bookId") String bookId) { return bookService.findBookById(Integer.parseInt(bookId));}

    @CrossOrigin
    @RequestMapping(value = "/addBook", method = RequestMethod.POST)
    public void addOne(@RequestBody Map<String, String> map){
        String title = map.get("title");
        String author = map.get("author");
        int price = Integer.parseInt(map.get("price"));
        int current_stock = Integer.parseInt(map.get("current_stock"));
        int total_stock = Integer.parseInt(map.get("total_stock"));
        String description = map.get("description");
        String imgUrl = map.get("imgUrl");
        String classname = map.get("classname");
        bookService.addOne(title,author,price,current_stock,total_stock,description,imgUrl,classname);
    }

    @CrossOrigin
    @RequestMapping(value = "/modifyBook", method = RequestMethod.POST)
    public Book modifyOne(@RequestBody Map<String, String> map) {
        int id = Integer.parseInt(map.get("id"));
        String title = map.get("title");
        String author = map.get("author");
        int price = Integer.parseInt(map.get("price"));
        int current_stock = Integer.parseInt(map.get("current_stock"));
        int total_stock = Integer.parseInt(map.get("total_stock"));
        String description = map.get("info");
        String imgUrl = map.get("img");
        String classname = map.get("classname");
        return bookService.modifyOne(id, title, author, price, current_stock, total_stock, description, imgUrl, classname);
    }

    @CrossOrigin
    @RequestMapping(value = "/deleteBook")
    public void deleteOne(@RequestParam(value = "id") int id) {
        bookService.deleteOne(id);
    }

    @CrossOrigin
    @RequestMapping(value = "/BookRange")
    public List<BookRange> getRange() {
        return bookService.getRange();
    }

    @CrossOrigin
    @RequestMapping(value = "/updateBookRange")
    public List<BookRange> updateRange(@RequestParam(value = "start") Long start, @RequestParam(value = "end") Long end) {
        Timestamp one = new Timestamp(start);
        Timestamp two = new Timestamp(end);
        return bookService.updateRange(one, two);
    }
}
