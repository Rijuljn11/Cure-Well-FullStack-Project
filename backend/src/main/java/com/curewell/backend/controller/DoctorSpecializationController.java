package com.curewell.backend.controller;

import com.curewell.backend.entity.Doctor;
import com.curewell.backend.entity.DoctorSpecialization;
import com.curewell.backend.service.DoctorSpecializationService;
import com.curewell.backend.repository.DoctorSpecializationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/doctor-specialization")
@CrossOrigin("*")
public class DoctorSpecializationController {

    @Autowired
    private DoctorSpecializationService service;

    @Autowired
    private DoctorSpecializationRepository doctorSpecializationRepository;

    // Assign specialization
    @PostMapping
    public DoctorSpecialization assignSpec(@RequestBody DoctorSpecialization ds) {

        ds.setSpecializationDate(LocalDate.now());

        return doctorSpecializationRepository.save(ds);
    }

    // Get doctors by specialization
    @GetMapping("/{code}")
    public List<Doctor> getDoctorsBySpecialization(@PathVariable String code) {
        return service.getDoctorsBySpecialization(code);
    }
}







