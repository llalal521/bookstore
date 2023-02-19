package com.example.demo.controllers;

import com.example.demo.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Item;

import java.util.*;

@RestController
@Scope("prototype")
public class CartController {
    @Autowired
    CartService cartService;

    @CrossOrigin
    @RequestMapping(path ="/cart", method = RequestMethod.POST)
    public void addData(@RequestBody Map<String, String> map){
        int user_id = Integer.parseInt(map.get("id"));
        int book_id = Integer.parseInt(map.get("bookid"));
        int num = Integer.parseInt(map.get("num"));
        cartService.addOne(user_id, book_id, num);
    }

    @CrossOrigin
    @RequestMapping(path = "/cart", method = RequestMethod.GET)
    public List<Item> getCartInfo(@RequestParam(value = "id") int id){
        return cartService.getCartInfo(id);
    }

    @CrossOrigin
    @RequestMapping("/clear")
    public void Clear(@RequestParam(value = "id") int id){
        cartService.clear(id);
    }

    @CrossOrigin
    @RequestMapping(value = "/clearone", method = RequestMethod.POST)
    public void ClearOne(@RequestBody Map<String, String> map){
        int row_id = Integer.parseInt(map.get("id"));
        cartService.clearOne(row_id);
    }
}
