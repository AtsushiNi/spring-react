package com.atsushini.springreact.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.atsushini.springreact.model.CsvFile;
import com.atsushini.springreact.model.User;
import com.atsushini.springreact.service.CsvFileService;
import com.atsushini.springreact.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserApiController {

    private final UserService userService;

    private final CsvFileService csvFileService;
    
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/upload")
    public CsvFile fileUpload(@RequestParam("file") MultipartFile file) throws Exception {
        return csvFileService.saveCsvFile(file);
    }
}
