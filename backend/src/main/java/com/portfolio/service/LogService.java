package com.portfolio.service;

import com.portfolio.Model.UserLog;
import com.portfolio.Repository.LogRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LogService {
    @Autowired
    private LogRepo logRepo;

    public boolean validateUser(String username, String password) {
        UserLog user = logRepo.findByUsernameByPassword(username,password);
        return user != null && user.getPassword().equals(password);
    }
}
