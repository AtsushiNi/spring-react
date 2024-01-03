package com.atsushini.springreact.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.atsushini.springreact.model.CsvFile;
import com.atsushini.springreact.repository.CsvFileRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CsvFileService {

    private final CsvFileRepository csvFileRepository;

    @Value("${upload.path}")
    private String uploadPath;

    
    public CsvFile saveCsvFile(MultipartFile file) throws IOException {
        Path uploadDir = Path.of(uploadPath);
        if (!Files.exists(uploadDir)) {
            Files.createDirectories(uploadDir);
        }

        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();

        Path filePath = uploadDir.resolve(fileName);
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        CsvFile csvFile = new CsvFile();
        csvFile.setOriginalFileName(file.getOriginalFilename());
        csvFile.setFileName(fileName);
        csvFile.setUploadDate(new Date());
        csvFileRepository.save(csvFile);

        return csvFile;
    }
    
}
