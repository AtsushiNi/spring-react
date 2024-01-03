package com.atsushini.springreact.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.atsushini.springreact.model.User;
import com.atsushini.springreact.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    
    private final UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

}
