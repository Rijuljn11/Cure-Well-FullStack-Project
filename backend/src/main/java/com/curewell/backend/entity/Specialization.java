package com.curewell.backend.entity;

import jakarta.persistence.*;

@Entity
public class Specialization {

    @Id
    private String specializationCode;

    private String specializationName;

    // Getters & Setters
    public String getSpecializationCode() {
        return specializationCode;
    }

    public void setSpecializationCode(String specializationCode) {
        this.specializationCode = specializationCode;
    }

    public String getSpecializationName() {
        return specializationName;
    }

    public void setSpecializationName(String specializationName) {
        this.specializationName = specializationName;
    }
}