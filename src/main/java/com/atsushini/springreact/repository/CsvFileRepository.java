package com.atsushini.springreact.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.atsushini.springreact.model.CsvFile;

public interface CsvFileRepository extends JpaRepository<CsvFile, Long> {
    
}
