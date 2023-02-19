package com.example.demo.entity;

import com.example.demo.entity.Book;
import com.example.demo.entity.User;
import com.example.demo.entity.Cart;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "item")
//@JsonIgnoreProperties(value={"handler", "hibernateLazyInitializer","fieldHandler"})
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class Item {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = IDENTITY)
    private int id;
    @Basic
    @Column(name = "num")
    private int num;
    @ManyToOne(
        fetch = FetchType.LAZY)
    @JoinColumn(name = "book_id")
    private Book book;
    @JsonIgnore
    @ManyToOne(
        fetch = FetchType.LAZY)
    @JoinColumn(name = "cart_id")
    private Cart cart;
    @JsonIgnore
    @ManyToOne(
            fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private Order order;

    public  Order getOrder(){ return order; }
    public void setOrder(Order order){ this.order = order; }

    public Cart getCart(){ return cart; }
    public void setCart(Cart cart){ this.cart = cart; }

    public Book getBook(){ return book; }
    public void setBook(Book book){ this.book = book; }

    public int getId(){ return id; }
    public void setId(int id){ this.id = id; }

    public int getNum(){ return num; }
    public void setNum(int num){ this.num = num; }

}
