package com.example.demo.serviceImpl;

import com.example.demo.Dao.UserDao;
import com.example.demo.entity.BookRange;
import com.example.demo.entity.User;
import com.example.demo.entity.UserRange;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

@Service
public class UserServiceImol implements UserService {
    @Autowired
    private UserDao userDao;

    @Override
    public int addOne(String username, String password, String e_mail){
        return userDao.addOne(username, password, e_mail);
    }

    @Override
    public User Login(String username, String password){
        return userDao.Login(username, password);
    }

    @Override
    public List<User> getUser(){ return userDao.getUser(); }

    @Override
    public int forbidOne(int id){ return userDao.forbidOne(id); }

    @Override
    public int JudgeExist(String username){ return userDao.JudgeExist(username); }

    @Override
    public List<UserRange> getRange(){ return userDao.getRange(); }

    @Override
    public List<UserRange> updateRange(Timestamp start, Timestamp end){ return userDao.updateRange(start, end); }

    @Override
    public List<BookRange> getRecord(int id){ return userDao.getRecord(id); }

    @Override
    public List<BookRange> updateRecord(Timestamp start, Timestamp end, int id){
        return userDao.updateRecord(start, end, id);
    }
}
