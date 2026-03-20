package com.curewell.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Surgery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int surgeryId;

    private int doctorId;

    private LocalDate surgeryDate;

    private double startTime;
    private double endTime;

    private String surgeryCategory;

    // Getters & Setters
    public int getSurgeryId() {
        return surgeryId;
    }

    public void setSurgeryId(int surgeryId) {
        this.surgeryId = surgeryId;
    }

    public int getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(int doctorId) {
        this.doctorId = doctorId;
    }

    public LocalDate getSurgeryDate() {
        return surgeryDate;
    }

    public void setSurgeryDate(LocalDate surgeryDate) {
        this.surgeryDate = surgeryDate;
    }

    public double getStartTime() {
        return startTime;
    }

    public void setStartTime(double startTime) {
        this.startTime = startTime;
    }

    public double getEndTime() {
        return endTime;
    }

    public void setEndTime(double endTime) {
        this.endTime = endTime;
    }

    public String getSurgeryCategory() {
        return surgeryCategory;
    }

    public void setSurgeryCategory(String surgeryCategory) {
        this.surgeryCategory = surgeryCategory;
    }
}