package com.curewell.backend.repository;

import com.curewell.backend.entity.Surgery;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface SurgeryRepository extends JpaRepository<Surgery, Integer> {

    List<Surgery> findBySurgeryDate(LocalDate surgeryDate);
}