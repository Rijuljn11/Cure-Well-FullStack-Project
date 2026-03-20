package com.curewell.backend.repository;

import com.curewell.backend.entity.DoctorSpecialization;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorSpecializationRepository extends JpaRepository<DoctorSpecialization, Integer> {

    List<DoctorSpecialization> findBySpecializationCode(String specializationCode);
}