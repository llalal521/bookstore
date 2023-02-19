package com.example.demo.DaoImpl;

import com.example.demo.Dao.CartDao;
import com.example.demo.entity.Book;
import com.example.demo.entity.Cart;
import com.example.demo.entity.Item;
import com.example.demo.entity.User;
import com.example.demo.repository.BookRepository;
import com.example.demo.repository.CartRepository;
import com.example.demo.repository.ItemRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CartDaoImpl implements CartDao {
    @Autowired
    CartRepository cartRepository;
    @Autowired
    BookRepository bookRepository;
    @Autowired
    ItemRepository itemRepository;
    @Autowired
    UserRepository userRepository;

    @Override
    public Book addOne(int user_id, Integer book_id, int num){
          Book book = bookRepository.findBookById(book_id);
          Cart cart = cartRepository.findCartByUser_id(user_id);
          Item item = new Item();
          item.setNum(num);
          item.setCart(cart);
          item.setBook(book);
          List<Item> item_list = cart.getItem_list();
          List<Item> book_item = book.getItem();
          item_list.add(item);
          book_item.add(item);
          book.setItem(book_item);
          cart.setItem_list(item_list);
          itemRepository.save(item);
          return book;
    }

    @Override
    public List<Item> getCartInfo(int id){
        Cart cart = cartRepository.findCartByUser_id(id);
        List<Item> list = cart.getItem_list();
        return list;
    }

    @Override
    public void clear(int id){
        Cart cart = cartRepository.findCartByUser_id(id);
        cartRepository.delete(cart);
        Cart new_cart = new Cart();
        User user = userRepository.getOne(id);
        new_cart.setUser(user);
        cartRepository.save(new_cart);
    }

    @Override
    public void clearOne(int id){
        Item item = itemRepository.getOne(id);
        itemRepository.delete(item);
    }
}
