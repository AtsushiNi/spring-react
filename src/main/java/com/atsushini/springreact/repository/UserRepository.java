package com.atsushini.springreact.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.atsushini.springreact.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
}
