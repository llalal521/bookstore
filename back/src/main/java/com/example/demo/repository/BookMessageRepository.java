package com.example.demo.repository;

import com.example.demo.entity.Book;
import com.example.demo.entity.BookMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BookMessageRepository extends JpaRepository<BookMessage, Integer> {
    @Query("select b from BookMessage b")
    List<BookMessage> getBookMessages();
    BookMessage findBookMessageById(int id);
}
