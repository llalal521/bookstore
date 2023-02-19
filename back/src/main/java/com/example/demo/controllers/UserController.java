package com.example.demo.controllers;

import com.example.demo.entity.BookRange;
import com.example.demo.entity.User;
import com.example.demo.entity.UserRange;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.WebApplicationContext;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.sql.Timestamp;
import java.util.List;
import java.util.Map;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @CrossOrigin
    @RequestMapping(value = "/register",method = RequestMethod.POST)
    public int Register(@RequestBody Map<String, String> map) {
        String username = map.get("username");
        String password = map.get("password");
        String e_mail = map.get("e_mail");
        int id = userService.addOne(username, password, e_mail);
        return id;
    }

    @CrossOrigin
    @RequestMapping(value = "/Login", method = RequestMethod.GET)
    public User Login(@RequestParam(value="username") String username, @RequestParam(value = "password") String password) {
       return userService.Login(username, password);
    }

    @CrossOrigin
    @RequestMapping(value = "/getUser")
    public List<User> getUser(){
        return userService.getUser();
    }

    @CrossOrigin
    @RequestMapping(value = "/forbidOne", method = RequestMethod.POST)
    public int forbidOne(@RequestBody Map<String, String> map){
        int id = Integer.parseInt(map.get("id"));
        return userService.forbidOne(id);
    }

    @CrossOrigin
    @RequestMapping(value = "/Judge", method = RequestMethod.GET)
    public int JudgeExist(@RequestParam(value="username") String username){
        return userService.JudgeExist(username);
    }

    @CrossOrigin
    @RequestMapping(value = "/UserRange")
    public List<UserRange> getRange() {
        return userService.getRange();
    }

    @CrossOrigin
    @RequestMapping(value = "/updateUserRange")
    public List<UserRange> updateRange(@RequestParam(value = "start") Long start, @RequestParam(value = "end") Long end) {
        Timestamp one = new Timestamp(start);
        Timestamp two = new Timestamp(end);
        return userService.updateRange(one, two);
    }

    @CrossOrigin
    @RequestMapping(value = "/Record")
    public List<BookRange> getRecord(@RequestParam(value = "id") int id){
        return userService.getRecord(id);
    }

    @CrossOrigin
    @RequestMapping(value = "/updateRecord")
    public List<BookRange> updateRecord(@RequestParam(value = "start") Long start, @RequestParam(value = "end") Long end, @RequestParam(value = "id") int id) {
        Timestamp one = new Timestamp(start);
        Timestamp two = new Timestamp(end);
        return userService.updateRecord(one, two, id);
    }
}
