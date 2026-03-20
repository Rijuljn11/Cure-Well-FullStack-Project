package com.curewell.backend.service;

import com.curewell.backend.entity.Doctor;
import com.curewell.backend.entity.DoctorSpecialization;

import java.util.List;

public interface DoctorSpecializationService {

    DoctorSpecialization assignSpecialization(DoctorSpecialization ds);

    List<Doctor> getDoctorsBySpecialization(String code);
}