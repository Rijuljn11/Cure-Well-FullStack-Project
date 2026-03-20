package com.curewell.backend.service.impl;

import com.curewell.backend.entity.Specialization;
import com.curewell.backend.repository.SpecializationRepository;
import com.curewell.backend.service.SpecializationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpecializationServiceImpl implements SpecializationService {

    @Autowired
    private SpecializationRepository specializationRepository;

    @Override
    public List<Specialization> getAllSpecializations() {
        return specializationRepository.findAll();
    }
}