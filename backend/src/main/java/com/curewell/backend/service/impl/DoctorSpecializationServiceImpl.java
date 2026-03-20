package com.curewell.backend.service.impl;

import com.curewell.backend.entity.Doctor;
import com.curewell.backend.entity.DoctorSpecialization;
import com.curewell.backend.repository.DoctorRepository;
import com.curewell.backend.repository.DoctorSpecializationRepository;
import com.curewell.backend.service.DoctorSpecializationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorSpecializationServiceImpl implements DoctorSpecializationService {

    @Autowired
    private DoctorSpecializationRepository repository;

    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public DoctorSpecialization assignSpecialization(DoctorSpecialization ds) {
        return repository.save(ds);
    }

    @Override
    public List<Doctor> getDoctorsBySpecialization(String code) {

        List<DoctorSpecialization> list =
                repository.findBySpecializationCode(code);

        List<Integer> doctorIds = list.stream()
                .map(DoctorSpecialization::getDoctorId)
                .toList();

        return doctorRepository.findAllById(doctorIds);
    }
}