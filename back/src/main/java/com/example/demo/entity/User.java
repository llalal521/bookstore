package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "user")
@JsonIgnoreProperties(value={"handler", "hibernateLazyInitializer","fieldHandler"})
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class User {
    private int id;
    private int type;
    private int status;
    private String username;
    private String password;
    private String e_mail;
    private Cart userCart;
    private List<Order> userOrder;

    @OneToOne(cascade = CascadeType.ALL,
            mappedBy = "user"
    )
    @JsonIgnore
    public Cart getUserCart(){ return userCart; }
    public void setUserCart(Cart userCart){ this.userCart = userCart; }

    @OneToMany(cascade = CascadeType.ALL,
            mappedBy = "user"
    )
    @JsonIgnore
    public List<Order> getUserOrder(){return userOrder;}
    public void setUserOrder(List<Order> order){this.userOrder = order;}

    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = IDENTITY)
    public int getId(){ return this.id; }
    public void setId(int id){ this.id = id;}

    @Basic
    @Column(name = "username")
    public String getUsername(){ return this.username; }
    public void setUsername(String username){ this.username = username; }

    @Basic
    @Column(name = "password")
    public String getPassword(){ return this.password; }
    public void setPassword(String password){ this.password = password; }

    @Basic
    @Column(name = "email")
    public String getE_mail(){ return this.e_mail; }
    public void setE_mail(String e_mail){ this.e_mail = e_mail; }

    @Basic
    @Column(name = "type")
    public int getType(){ return this.type; }
    public void setType(int type){ this.type = type; }

    @Basic
    @Column(name = "active")
    public int getStatus(){ return this.status; }
    public void setStatus(int status){ this.status = status; }

}
