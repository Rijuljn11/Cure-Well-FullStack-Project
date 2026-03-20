package com.curewell.backend.service.impl;

import com.curewell.backend.entity.Doctor;
import com.curewell.backend.repository.DoctorRepository;
import com.curewell.backend.service.DoctorService;
import com.curewell.backend.exception.ResourceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    @Override
    public Doctor addDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    @Override
    public Doctor updateDoctor(int id, Doctor doctor) {
        Doctor existing = doctorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Doctor not found with ID: " + id));

        existing.setDoctorName(doctor.getDoctorName());

        return doctorRepository.save(existing);
    }

    @Override
    public void deleteDoctor(int id) {
        doctorRepository.deleteById(id);
    }
}