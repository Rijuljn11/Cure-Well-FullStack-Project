package com.curewell.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class DoctorSpecialization {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int doctorId;

    private String specializationCode;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate specializationDate;

    // getters & setters
    public int getId() {
        return id;
    }

    public int getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(int doctorId) {
        this.doctorId = doctorId;
    }

    public String getSpecializationCode() {
        return specializationCode;
    }

    public void setSpecializationCode(String specializationCode) {
        this.specializationCode = specializationCode;
    }

    public LocalDate getSpecializationDate() {
        return specializationDate;
    }

    public void setSpecializationDate(LocalDate specializationDate) {
        this.specializationDate = specializationDate;
    }
}