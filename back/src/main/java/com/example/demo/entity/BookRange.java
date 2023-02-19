package com.example.demo.entity;

import com.fasterxml.jackson.annotation.*;

import static javax.persistence.GenerationType.IDENTITY;

import java.util.List;
import javax.persistence.*;

@Entity
@Table(name = "book")
@JsonIgnoreProperties(value={"handler", "hibernateLazyInitializer","fieldHandler"})
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class BookRange {
    private int id;
    private Long price;
    private Long num;

    private String title;
    private String author;
    private String classname;
    private String img;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = IDENTITY)
    public int getId() { return id; }
    public void setId(int id){ this.id = id; }

    @Basic
    @Column(name = "price")
    public Long getPrice() { return price; }
    public void setPrice(Long price) { this.price = price; }

    @Transient
    public Long getNum(){ return num; }
    public void setNum(Long num){ this.num = num; }

    @Basic
    @Column(name = "name")
    public String getTitle(){ return title; }
    public void setTitle(String title){ this.title = title; }

    @Basic
    @Column(name = "author")
    public String getAuthor(){ return author; }
    public void setAuthor(String author){ this.author = author; }

    @Basic
    @Column(name = "type")
    public String getClassname(){ return classname; }
    public void setClassname(String classname){ this.classname = classname; }

    @Basic
    @Column(name = "image")
    public String getImg(){ return img; }
    public void setImg(String img){ this.img = img; }
}