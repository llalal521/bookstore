package com.example.demo.controllers;

import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.WebApplicationContext;

@RestController
public class MsgController {
    @Autowired
    WebApplicationContext applicationContext;

    @CrossOrigin
    @RequestMapping(value = "createorder", method = RequestMethod.POST)
    public int sendOrderMsg(@RequestBody JSONObject obj){
        JmsTemplate jmsTemplate = applicationContext.getBean(JmsTemplate.class);
        System.out.println("get a JsonObject, sending it");
        jmsTemplate.convertAndSend("orderBox", obj);
        return 0;
    }
}
