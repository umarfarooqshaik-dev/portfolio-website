package com.portfolio.Controller;

import com.portfolio.Model.UserLog;
import com.portfolio.service.LogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class LogController {

    @Autowired
    private LogService logService;

    @PostMapping("/login")
    public String login(@RequestBody UserLog userLog) {

        boolean isValidUser =
                logService.validateUser(
                        userLog.getUsername(),
                        userLog.getPassword()
                );

        if (isValidUser) {
            return "Login successful!";
        } else {
            return "Invalid username or password.";
        }
    }
}