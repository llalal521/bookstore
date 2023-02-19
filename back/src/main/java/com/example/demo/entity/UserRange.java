package com.example.demo.entity;

import com.fasterxml.jackson.annotation.*;

import static javax.persistence.GenerationType.IDENTITY;

import javax.persistence.*;

@Entity
@Table(name = "User")
@JsonIgnoreProperties(value={"handler", "hibernateLazyInitializer","fieldHandler"})
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class UserRange {
    private int id;
    private Long total_price;

    private String username;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = IDENTITY)
    public int getId() { return id; }
    public void setId(int id){ this.id = id; }

    @Transient
    public Long getTotal_Price() { return total_price; }
    public void setTotal_Price(Long price) { this.total_price = price; }

    @Basic
    @Column(name = "username")
    public String getUsername(){ return username; }
    public void setUsername(String username){ this.username = username; }
}
