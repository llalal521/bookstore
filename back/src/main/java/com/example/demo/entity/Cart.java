package com.example.demo.entity;

import com.example.demo.entity.User;
import com.example.demo.entity.Item;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "cart")
@JsonIgnoreProperties(value={"handler", "hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class Cart {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = IDENTITY)
    private int id;
    @OneToOne(
            cascade = {},
            fetch = FetchType.EAGER
    )
    @JoinColumn(name = "user_id")
    private User user;
    @OneToMany(mappedBy = "cart",
        cascade = CascadeType.ALL)
    private List<Item> item_list;

    public List<Item> getItem_list(){ return item_list; }
    public void setItem_list(List<Item> item_list){ this.item_list = item_list; }

    public User getUser(){ return user; }
    public void setUser(User user){ this.user = user; }

    public int getId(){ return this.id; }
    public void setId(int id){ this.id = id; }

}
