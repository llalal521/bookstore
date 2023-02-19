package com.example.demo.entity;

import com.fasterxml.jackson.annotation.*;

import static javax.persistence.GenerationType.IDENTITY;

import java.util.List;
import javax.persistence.*;

@Entity
@Table(name = "books")
@JsonIgnoreProperties(value={"handler", "hibernateLazyInitializer","fieldHandler"})
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class Book {
    private int id;
    private Long price;
    private Long current_stock;
    private Long total_stock;

    private String title;
    private String author;
    private String classname;
    private String info;
    private String img;
    @JsonIgnore
    private List<Item> item;

    @OneToMany(mappedBy = "book",
            cascade = CascadeType.ALL)
    public List<Item> getItem(){ return item; }
    public void setItem(List<Item> item){ this.item = item; }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = IDENTITY)
    public int getId() { return id; }
    public void setId(int id){ this.id = id; }

    @Basic
    @Column(name = "price")
    public Long getPrice() { return price; }
    public void setPrice(Long price) { this.price = price; }

    @Basic
    @Column(name = "number")
    public Long getCurrent_stock(){ return current_stock; }
    public void setCurrent_stock(Long current_stock){ this.current_stock = current_stock; }

    @Basic
    @Column(name = "total_stock")
    public Long getTotal_stock(){ return total_stock; }
    public void setTotal_stock(Long total_stock){ this.total_stock = total_stock; }

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
    @Column(name = "description")
    public String getInfo(){ return info; }
    public void setInfo(String info){ this.info = info; }

    @Basic
    @Column(name = "image")
    public String getImg(){ return img; }
    public void setImg(String img){ this.img = img; }
}
