package com.curewell.backend.service;

import com.curewell.backend.entity.Doctor;
import java.util.List;

public interface DoctorService {

    List<Doctor> getAllDoctors();

    Doctor addDoctor(Doctor doctor);

    Doctor updateDoctor(int id, Doctor doctor);

    void deleteDoctor(int id);
}