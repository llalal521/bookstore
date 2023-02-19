package com.example.demo.DaoImpl;

import com.example.demo.Dao.BookDao;
import com.example.demo.entity.*;
import com.example.demo.repository.BookMessageRepository;
import com.example.demo.repository.BookRepository;
import com.example.demo.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;

@Repository
public class BookDaoImpl implements BookDao{
    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private BookMessageRepository bookMessageRepository;
    @Autowired
    private OrderRepository orderRepository;
    @Override
    public BookMessage findOne(Integer id){
        return bookMessageRepository.findBookMessageById(id);
    }
    @Override
    public List<BookMessage> getBook(){
        List<BookMessage> books = bookMessageRepository.findAll();
        return books;
    }
    @Override
    public List<BookMessage> getBooks(int page) {
        PageRequest pageReques=PageRequest.of(page-1,8);   //获取第1页的两条记录
        Page<BookMessage> pages = bookMessageRepository.findAll(pageReques);
        List<BookMessage> books = pages.getContent();
        return books;
    }
    @Override
    public void addOne(String title, String author, int price, int current_stock, int total_stock, String description, String imgUrl, String classname){
        Book book = new Book();
        book.setAuthor(author);
        book.setInfo(description);
        book.setImg(imgUrl);
        book.setTitle(title);
        book.setPrice( new Long(price) );
        book.setTotal_stock( new Long(total_stock) );
        book.setCurrent_stock( new Long(current_stock) );
        book.setClassname(classname);
        bookRepository.save(book);
    }
    @Override
    public Book modifyOne(int id, String title, String author, int price, int current_stock, int total_stock, String description, String imgUrl, String classname){
        Book book = bookRepository.getOne(id);
        book.setAuthor(author);
        book.setInfo(description);
        book.setImg(imgUrl);
        book.setTitle(title);
        book.setPrice( new Long(price) );
        book.setTotal_stock( new Long(total_stock) );
        book.setCurrent_stock( new Long(current_stock) );
        book.setClassname(classname);
        bookRepository.save(book);
        return book;
    }
    @Override
    public void deleteOne(int id){
        Book book = bookRepository.getOne(id);
        bookRepository.delete(book);
    }
    @Override
    public List<BookRange> getRange(){
        List<Order> list = orderRepository.findAll();
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
                    n ++;
                    if(result.get(m).getTitle().equals(book.getTitle())) {
                        result.get(m).setNum(result.get(m).getNum() + num);
                        break;
                    }
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
        result.sort(new Comparator<BookRange>() {
            @Override
            public int compare(BookRange o1, BookRange o2) {
                int i = o2.getNum().compareTo(o1.getNum());
                if(i == 0){
                    return o2.getPrice().compareTo(o1.getPrice());
                }
                return i;
            }
        });
        return result;
    }

    @Override
    public List<BookRange> updateRange(Timestamp start, Timestamp end){
        List<Order> list = orderRepository.findAll();
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
        result.sort(new Comparator<BookRange>() {
            @Override
            public int compare(BookRange o1, BookRange o2) {
                int i = o2.getNum().compareTo(o1.getNum());
                if(i == 0){
                    return o2.getPrice().compareTo(o1.getPrice());
                }
                return i;
            }
        });
        return result;
    }
}
