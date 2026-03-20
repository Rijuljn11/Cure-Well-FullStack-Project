package com.curewell.backend.controller;

import com.curewell.backend.entity.Specialization;
import com.curewell.backend.service.SpecializationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/specializations")
@CrossOrigin("*")
public class SpecializationController {

    @Autowired
    private SpecializationService specializationService;

    @GetMapping
    public List<Specialization> getAllSpecializations() {
        return specializationService.getAllSpecializations();
    }
}