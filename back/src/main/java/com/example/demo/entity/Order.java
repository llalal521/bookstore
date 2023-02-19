package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "book_order")
@JsonIgnoreProperties(value={"handler", "hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class Order {
    @Id
    @Column(name = "order_id")
    @GeneratedValue(strategy = IDENTITY)
    private int id;
    @ManyToOne(
            cascade = {},
            fetch = FetchType.EAGER
    )
    @JoinColumn(name = "user_id")
    private User user;
    @OneToMany(mappedBy = "order",
            cascade = CascadeType.ALL)
    private List<Item> item_list;
    @Basic
    @Column(name="total_price")
    private int total_price;
    @Basic
    @Column(name = "create_time")
    private Timestamp time;

    public Timestamp getTime(){ return time; }
    public void setTime(Timestamp time){ this.time = time; }

    public int getTotal_price(){return total_price;}
    public void setTotal_price(int total_price){this.total_price = total_price;}

    public List<Item> getItem_list(){ return item_list; }
    public void setItem_list(List<Item> item_list){ this.item_list = item_list; }

    public User getUser(){ return user; }
    public void setUser(User user){ this.user = user; }

    public int getId(){ return this.id; }
    public void setId(int id){ this.id = id; }

}
