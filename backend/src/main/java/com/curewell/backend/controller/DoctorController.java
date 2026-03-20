package com.curewell.backend.controller;

import com.curewell.backend.entity.Doctor;
import com.curewell.backend.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doctors")
@CrossOrigin(origins = "http://localhost:3000")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;


    @GetMapping
    public List<Doctor> getAllDoctors() {
        return doctorService.getAllDoctors();
    }


    @PostMapping
    public Doctor addDoctor(@RequestBody Doctor doctor) {
        if (doctor.getDoctorName() == null || doctor.getDoctorName().isEmpty()) {

                throw new IllegalArgumentException("Doctor name is required");
            }

        return doctorService.addDoctor(doctor);
    }


    @PutMapping("/{id}")
    public Doctor updateDoctor(@PathVariable int id, @RequestBody Doctor doctor) {
        doctor.setDoctorId(id);
        return doctorService.updateDoctor(id, doctor);
    }


    @DeleteMapping("/{id}")
    public String deleteDoctor(@PathVariable int id) {
        doctorService.deleteDoctor(id);
        return "Doctor deleted successfully";
    }
}