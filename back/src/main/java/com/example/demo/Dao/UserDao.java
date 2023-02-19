package com.example.demo.Dao;

import com.example.demo.entity.BookRange;
import com.example.demo.entity.User;
import com.example.demo.entity.UserRange;

import java.sql.Timestamp;
import java.util.List;

public interface UserDao {
    int addOne(String username, String password, String e_mail);
    User Login(String username, String password);
    List<User> getUser();
    int forbidOne(int id);
    int JudgeExist(String username);
    List<BookRange> getRecord(int id);
    List<BookRange> updateRecord(Timestamp start, Timestamp end, int id);
    List<UserRange> getRange();
    List<UserRange> updateRange(Timestamp start, Timestamp end);
}
