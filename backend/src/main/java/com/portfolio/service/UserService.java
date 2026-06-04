package com.portfolio.service;

import com.portfolio.Model.User;
import com.portfolio.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserService {


    @Autowired
    UserRepo userRepo;

    public List<User> getAll(){
        return  userRepo.findAll();
    }
    public User saveUser(User userDetails){
        return userRepo.save(userDetails);
    }
    public void deleteUser(Long id){
        userRepo.deleteById(id);
    }

}

