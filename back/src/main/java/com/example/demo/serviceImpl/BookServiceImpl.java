package com.example.demo.serviceImpl;

import com.example.demo.entity.Book;
import com.example.demo.entity.BookMessage;
import com.example.demo.Dao.BookDao;
import com.example.demo.entity.BookRange;
import com.example.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookDao bookDao;

    @Override
    public BookMessage findBookById(Integer id){
        return bookDao.findOne(id);
    }

    @Override
    public List<BookMessage> getBooks(int page) {
        return bookDao.getBooks(page);
    }

    @Override
    public List<BookMessage> getBook(){ return bookDao.getBook(); }

    @Override
    public void addOne(String title, String author, int price, int current_stock, int total_stock, String description, String imgUrl, String classname)
    {
        bookDao.addOne(title,author,price,current_stock,total_stock,description,imgUrl, classname);
    }

    @Override
    public Book modifyOne(int id, String title, String author, int price, int current_stock, int total_stock, String description, String imgUrl, String classname)
    {
        return bookDao.modifyOne(id, title,author,price,current_stock,total_stock,description,imgUrl, classname);
    }

    @Override
    public void deleteOne(int id){
        bookDao.deleteOne(id);
    }

    @Override
    public List<BookRange> getRange(){ return bookDao.getRange(); }

    @Override
    public List<BookRange> updateRange(Timestamp start, Timestamp end){ return bookDao.updateRange(start, end); }
}